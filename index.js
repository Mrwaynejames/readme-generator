const inquirer = require('inquirer');
const fs = require('fs');

const rmskeleton = (response) =>
`# ${response.title}

* [Decription](#Description) 
* [Install](#Install)
* [Usage](#Usage) 
* [Credits](#Credits)
* [License](#License)
* [Badges](#Badges)
* [Features](#Features)
* [Contributions](#Constribution)
* [Tests](#Tests)
## Description
${response.description}
## Install
${response.install}
## Usage
${response.usage}
## Credits
${response.credits}
## License
${response.license}
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
      type: 'input',
      message: 'Did you collaborate with anyone?',
      name: 'credits',
      },
      {
      type: 'input',
      message: 'What License would you like?',
      name: 'license'
      },
      {
      type: 'input',
      message: 'Any badges?',
      name: 'badges',
      },
      {
      type: 'input',
      message: 'Does your program have any specific features?',
      name: 'features',
      },
      {
      type: 'input',
      message: 'How should others contribute?',
      name: 'help', 
      },
      {
      type: 'input',
      message: 'What tests did you run?',
      name: 'test'
      },
  ])
  .then((response) => {
    const grm = rmskeleton(response);

    fs.writeFile('generatedreadme.md', grm, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });