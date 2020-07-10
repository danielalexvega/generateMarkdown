// function to generate markdown for README
//style the markdown
function generateMarkdown(data) {
    let backticks = '```';

    return `# ${data.title}             ${generateBadge(data.license)}

##Description

${data.description}

## Table of Contents

* [Installation Instructions](#Installation)
* [Usage Information](#Usage)
* [Guidelines](#guidelines)
* [Test Instructions](#Tests)
* [License](#License)
* [Questions](#Questions)

    
## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## Guidelines
${data.guidelines}

## Tests
${backticks}
${data.testInstructions}
${backticks}
## License
${data.license}

## Questions
[Github Profile](https://github.com/${data.github})

If you have a question, email me <${data.email}>
  
`;
  }

  function generateBadge(license) {
    let licenseName = license.replace(' ', '');
    return `![License](https://img.shields.io/badge/License-${licenseName}-blue)`;
  }
  
  module.exports = generateMarkdown;
  