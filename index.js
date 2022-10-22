const inquirer = require('inquirer');
const fs = require('fs');

const rmskeleton = (response) =>
`# ${response.title}

![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)

## Description
${response.description}

## Table of Contents
* [Decription](#Description) 
* [Install](#Install)
* [Usage](#Usage) 
* [Credits](#Credits)
* [License](#License)
* [Badges](#Badges)
* [Features](#Features)
* [Contributions](#Constribution)
* [Tests](#Tests)

## Install
${response.install}
## Usage
${response.usage}
## Credits
${response.credits}
## License
![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
This progtam uses ${response.license} License
## Badges
${response.badges}
## Features
${response.features}
## Constribution
${response.help}
## Tests
${response.tests}`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Desctibe your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you intall your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How do I use your application?',
      name: 'usage',
      },
      {
      type: 'list',
      message: 'What License would you like?',
      name: 'license',
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]
      },
      {
        type: 'input',
        message: 'Did you collaborate with anyone?',
        name: 'credits',
        },
      {
      type: 'input',
      message: 'Does your program have any specific features?',
      name: 'features',
      },
      {
      type: 'input',
      message: 'If you ran tests, what were they?',
      name: 'test'
      },
      {
        type: 'input',
        message: 'what questions does this solve?';
        name: 'question'
      },
  ])
  .then((response) => {
    const grm = rmskeleton(response);

    fs.writeFile('generatedreadme.md', grm, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });