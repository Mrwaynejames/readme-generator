const inquirer = require('inquirer');

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
        message: 'what License would you like?',
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
    console.log(response)
    const rmSkeleton =
    '# title

    ## Description
    
    ## Install
    
    ## Usage
    
    ## Credits
    
    ## License
    
    ## Badges
    
    ## Features
    
    ## Contributions
    
    ## Tests'
  });