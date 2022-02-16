//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
//як можна це обійти, але поки зробіть так
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, 'files'), (err) => {
    if (err) {
        console.log(err);

    }
})
fs.mkdir(path.join(__dirname, 'rew'), (err) => {
    if (err) {
        console.log(err);

    }
})
fs.appendFile(path.join(__dirname, 'files', 'file.txt'), '\nNew Data', (err) => {
    if (err) {
        console.log(err);
        throw err
    }
})
fs.rename(path.join(__dirname, 'files', 'file.txt'), path.join(__dirname, 'rew', 'file.txt'), (err) => {
    if (err) {
        console.log(err)

    }
})
//2. Створіть файл ( можете вручну ) заповніть його якимись даними
//Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку
// та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
const inPersonUsers = [
    {name: 'Andrii', age: 22, city: 'Lviv'},
    {name: 'Lina', age: 12, city: 'Sancey'}]


for (const person of inPersonUsers) {
    fs.appendFile(path.join(__dirname, 'files', 'file1.txt'), `Name: ${person.name}, Age: ${person.age}, City: ${person.city}\n`, (err) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        fs.readFile(path.join(__dirname, 'files', 'file1.txt'), 'utf8', (err, textData) => {
            if (err) {
                console.log(err);
                throw (err);
            }
            fs.mkdir(path.join(__dirname, 'new', 'newFolder'), {recursive: true}, (err) => {
                if (err) {
                    console.log(err);
                    throw (err);
                }
                fs.appendFile(path.join(__dirname, 'new', 'newFolder', 'new.txt'), textData, {flag: 'w'}, (err) => {
                    if (err) {
                        console.log(err);
                        throw (err);
                    }
                    fs.unlink(path.join(__dirname, 'files', 'file1.txt'), () => {
                    });
                });
            });
        });
    });
}

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли
// запишіть якусь дату) ) і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
// тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до
// назви префікс _new


fs.mkdir(path.join(__dirname, 'data', 'data1', 'data2'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw (err);
    }
    fs.appendFile(path.join(__dirname, 'data', 'data.txt'), 'SOMETHING', (err) => {
        if (err) {
            console.log(err);
            throw (err);
        }
        fs.readdir(path.join(__dirname, 'data'), (err, data) => {
            console.log(data);
            for (const d of data) {
                if (fs.statSync(path.join(__dirname, 'data', d)).isFile()) {
                    fs.truncate(path.join(__dirname, 'data', d), () => {
                    });
                } else {
                    fs.rename(path.join(__dirname, 'data', d), path.join(__dirname, 'data', `new_${d}`), () => {
                    });
                }
            }
        });
    });
});
