const fs = require('node:fs');
//LEGGERE IL FILE DA PC
let data;
try {
    data = fs.readFileSync('./input/students.csv', 'utf8');
} catch (error) {
    console.error(error);
}

const stringArray = data.split(/\r?\n/);

const propertiesString = stringArray.shift();



const studentArray = [];
for (let i = 0; i < stringArray.length; i++) {

    const valuesString = stringArray[i];

    const student = {};

    // console.log('giro n' , i)
    // console.log('studente vuoto', student)
    // console.log('nomi delle proprietà, (key)', propertiesString);
    // console.log('valori delle proprietà (value)', valueString)
    // console.log('--------------------')
    const propertiesArray = propertiesString.split(';');
    const valuesArray = valuesString.split(';');
    // console.log(propertiesArray);
    // console.log(valuesArray);



    for (let j = 0; j < propertiesArray.length; j++) {
        const property = propertiesArray[j];
        const value = valuesArray[j];
        student[property] = value;





    }
    studentArray.push(student);
}



console.log(studentArray);







// const jsonArray = JSON.stringify(studentArray)


// try  {
//     fs.writeFileSync("./output/students-data.json", jsonArray);


// } catch (err) {
//     console.error(err);
// }

// const fs = require('node:fs');

// // LEGGERE IL FILE JSON
// let data;
// try {
//     data = fs.readFileSync('./output/students-data.json', 'utf8');
// } catch (error) {
//     console.error(error);
// }

// // Trasformare la stringa JSON in array di oggetti senza usare JSON.parse
// let studentArray;
// try {
//     studentArray = eval(data); // attenzione: funziona solo se il file è sicuro
// } catch (err) {
//     console.error(err);
// }

// // 🔹 Creare un array con le proprietà del primo oggetto
// let propertiesArray = [];
// for (let prop in studentArray[0]) {
//     propertiesArray.push(prop);
// }

// // 🔹 Creare la riga delle intestazioni
// let propertiesString = '';
// for (let i = 0; i < propertiesArray.length; i++) {
//     if (i > 0) propertiesString += ';';
//     propertiesString += propertiesArray[i];
// }

// // 🔹 Inizializzare il CSV con le intestazioni
// let csvData = propertiesString + '\n';

// // 🔹 Creare le righe dei valori
// for (let i = 0; i < studentArray.length; i++) {
//     let line = '';
//     for (let j = 0; j < propertiesArray.length; j++) {
//         if (j > 0) line += ';';
//         line += studentArray[i][propertiesArray[j]];
//     }
//     csvData += line + '\n';
// }

// // 🔹 Scrivere il file CSV
// try {
//     fs.writeFileSync('./output/students-from-json.csv', csvData);
//     console.log('File CSV creato con successo!');
// } catch (err) {
//     console.error(err);
// }
