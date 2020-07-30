const {writeFile, write} = require('fs');
const { stdout, stderr } = require('process');
var exec = require('child_process').exec;

const runBtn = document.getElementById('runBtn')
const output = document.getElementById('output-area')

//running the code on pressing button
runBtn.onclick = e => {
    //extracting code from textarea
    let code = document.getElementById('editor-area').value
    let inputValues = document.getElementById('input-values').value
    
    //saving the code in a temp.cpp file
    writeFile('temp.cpp', code, (err) => {
        if(err) throw err;
        console.log('cpp file created');
    })

    writeFile('input.txt', inputValues, (err) => {
        if(err) throw err;
        console.log('input.txt created')
    })

    let command = 'g++ temp.cpp -o temp && ./temp < input.txt';

    //creating running the CPP file and getting the output
    exec(command, (err, stdout, stderr) => {
        output.innerText = stdout + stderr
        if(err !== null) {
            console.log('exec error: ' + err)
        }
    });
}