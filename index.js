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
          message: 'Please enter your github account link.',
          name: 'github',
          validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Please enter your github link');
                return false;
              }
          }
      },
      {
        type: 'input',
        message: 'Please enter your email!',
        name: 'email',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter your email');
              return false;
            }
          }
    
    },
        {
            type: 'input',
            message: 'Please enter a description of the project.',
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
          type: 'rawlist',
          message: 'Would you like a table of contents?',
          name: 'table',
          choices: ['Yes', 'No' ],
          validateResponse() {
          if ('No') {
        }
        else if ('No') {
            console.log("Table not included");
        }
        
        }
      },
        {
            type: 'input',
            message: 'Please input installation details?',
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
            message: 'What was used for this project?',
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
            type: 'rawlist',
            message: 'Please pick a license:',
            name: 'License',
            choices: ['MIT', 'Creative Commons', 'General Public License', 'Open Source' ],
            validateResponse() {
            if ('MIT') {
          }
          else if ('CreativeCommons') {
              console.log("You are probably well informed");
          }
          else if ('GeneralPublicLicense') {
              console.log('GeneralPublicLicense');
          }
          else {
              console.log('OpenSource');
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
        {
          type: 'input',
          message: 'Please enter a link to your project.',
          name: 'link',
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
      fs.writeFile('READMEtemplate.md', `
# ${data.title}
### Link: ${data.link}
## ![license](https://img.shields.io/badge/license-${data.License}-blue)
## Table of Contents:

[Description](#description) 
[Install](#installation) 
[Licensing](#licensing) 
[Usage](#usage)
[Contributors](#contributors) 
[Questions](#questions) 
[Contact](#contact) 



## Description 
${data.description}
## Installation:  
${data.installation}
### Usage: 
 ${data.installation}
### Licensing: 
  This project is licensed by: ${data.License}
### Contributors: 
 ${data.contributing}
### Questions: 
${data.questions}
### Contact: 
Please contact me with any questions through the email below!
 Contact Info: ${data.email}Feel free to check out other projects I have worked on : ${data.github} 
      
      
      ` , err => {
        if (err) throw err;
      
        console.log('Portfolio complete! Check out index.html to see the output!');
      });
       
    })
    
  };

  
  

  startProgram();


  