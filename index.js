const inquirer = require('inquirer');
console.log("readme working");
const fs = require('fs');
const path = require('path');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'README Heading',
            name: 'heading',
        
        },
        {
            type: 'title',
            message: 'Title Name',
            name: 'title',
        
        },
        {
            type: 'description',
            message: 'Description of Project',
            name: 'description',
        
        },
        {
            type: 'table-of-contents',
            message: 'Table of contents',
            name: 'table-of-contents',
        
        },
        {
            type: 'installation',
            message: 'installation required',
            name: 'installation',
        
        },
        {
            type: 'usage',
            message: 'Used for',
            name: 'usage',
        
        },
        {
            type: 'License',
            message: 'License',
            name: 'License',
        
        },
        {
            type: 'Contributing',
            message: 'Contributors',
            name: 'contributing',
        
        },
        {
            type: 'Tests',
            message: 'Tests',
            name: 'tests',
        
        },
        {
            type: 'Questions',
            message: 'Questions',
            name: 'questions',
        
        },
    ])



    //  Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions