// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж

// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city

// 3. /user/:id сторінка з інфою про одного юзера

// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект
const express = require("express");
const path = require("path");
const {engine} = require("express-handlebars");
const app = express();

const users = [
    {
        firstName: 'Marina',
        lastName: 'Svid',
        email: 'svid@i.ua',
        password: '666',
        age: 39,
        city: 'Kharkiv'
    },
    {
        firstName: 'Sergii',
        lastName: 'Timoshun',
        email: 'timoshun@gmail.com',
        password: 'timos',
        age: 35,
        city: 'Doneck'

    },
    {
        firstName: 'Lina',
        lastName: 'Kharchenko',
        email: 'lina@mail.ru',
        password: 'lina',
        age: 18,
        city: 'Varshava'

    },
    {
        firstName: 'Ludmila',
        lastName: 'Kharchenko',
        email: 'ludmila@gmail.com',
        password: 'werd',
        age: 32,
        city: 'Zavodske'

    },
];


app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'hbs');
app.engine('hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res)=>{
    res.render('login')
    })

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', (req, res) => {
      let usersArr = [...users];
    if (req.query.city) {
        usersArr = usersArr.filter(user => user.city === req.query.city);
    }

    if (req.query.age) {
        usersArr = usersArr.filter(user => user.age === +req.query.age);
    }
    res.render('users', {users: usersArr});
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
        res.render('user', users[userId - 1]);
});


app.post('/login', (req, res)=> {
       const emailList = users.some((registerUser) => registerUser.email === req.body.email);
    if (emailList) {
        res.redirect('/notFound');
    } else {
        users.push(req.body);
        res.redirect('/users');
    }
})
app.use((req, res)=>{
    res.render('notFound')
})
app.listen(5200, ()=>{
    console.log('Server has started on port 5200')
})