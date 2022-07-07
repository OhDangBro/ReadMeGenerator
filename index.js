const inquirer = require('inquirer');
console.log("readme working");
const fs = require('fs');
const path = require('path');
var profileDataArgs = process.argv.slice(10, process.argv.length);
var commandLineArgs = process.argv;
function startProgram() {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter title name.',
            name: 'title',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('You need to enter a title');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Description of Project',
            name: 'description',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Table of contents',
            name: 'table',
            validate: tableInput => {
                if (tableInput) {
                  return true;
                } else {
                  console.log('You need to enter a table of contents!');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'installation required',
            name: 'installation',

            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('You need to enter install info');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Used for',
            name: 'usage',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('You need to enter usage of project');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'License',
            name: 'License',
            validate: licenseInput => {
                if (licenseInput) {
                  return true;
                } else {
                  console.log('You need to enter licenses');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Contributors',
            name: 'contributing',
            validate: contributorInput => {
                if (contributorInput) {
                  return true;
                } else {
                  console.log('You need to enter contributors names');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'tests',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('You need to enter test!');
                  return false;
                }
              }
        
        },
        {
            type: 'input',
            message: 'Questions',
            name: 'questions',
            validate: questionInput => {
                if (questionInput) {
                  return true;
                } else {
                  console.log('You need to enter questions!');
                  return false;
                }
              }
        
        },
    ]).then((data) => {
      fs.writeFile('README.MD', `
      #${data.title}
      ##${data.description}
      ###${data.installation}
      ###${data.installation}
      ###${data.License}
      ###${data.contributing}
      ###${data.questions}

      ` , err => {
        if (err) throw err;
      
        console.log('Portfolio complete! Check out index.html to see the output!');
      });
       
    })
    
  };

  
  

  startProgram();


  