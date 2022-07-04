const inquirer = require('inquirer');
console.log("readme working");
const fs = require('fs');
const path = require('path');
const heading = profileDataArgs[0];
const title = profileDataArgs[1];
const description = profileDataArgs[3];
const table = profileDataArgs[4];
const installation = profileDataArgs[5];
const usage = profileDataArgs[6];
const License = profileDataArgs[7];
const contributing = profileDataArgs[8];
const tests = profileDataArgs[9];
const questions = profileDataArgs[10];
const generatePage = (heading, title, ) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

inquirer
    .prompt([
        {
            type: 'input',
            message: 'README Heading',
            name: 'heading',
        
        },
        {
            type: 'input',
            message: 'Title Name',
            name: 'title',
        
        },
        {
            type: 'input',
            message: 'Description of Project',
            name: 'description',
        
        },
        {
            type: 'input',
            message: 'Table of contents',
            name: 'table',
        
        },
        {
            type: 'input',
            message: 'installation required',
            name: 'installation',
        
        },
        {
            type: 'input',
            message: 'Used for',
            name: 'usage',
        
        },
        {
            type: 'input',
            message: 'License',
            name: 'License',
        
        },
        {
            type: 'input',
            message: 'Contributors',
            name: 'contributing',
        
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',
        
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'questions',
        
        },
    ])
    .then((data) =>{
        fs.writeFile('README.md', inputInfo(data), (err) => err ? console.log(err) : co
        );
    })



    //  Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions