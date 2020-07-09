// function to generate markdown for README
//style the markdown
function generateMarkdown(data) {
    //markdown....
    return `# ${data.title}

    ##Description

    ${data.description}

    ## Table of Contents

    * [Installation Instructions](#installation)
    * [Usage Information](#usage)
    * [Guidelines](#guidelines)
    * [Test Instructions](#testInstructions)
    * [License](#license)
    * [Questions](#questions)

    
    ## Installation Instructions
    ${data.installInstructions}

    ## Usage Information
    ${data.usageInformation}

    ## Guidelines
    ${data.guidelines}

    ## Test Instructions
    ${data.testInstructions}

    ## License
    ${data.license}

    ## Questions
    [Github Profile](https://github.com/${data.github})
    <${data.email}>
  
  `;
  }
  
  module.exports = generateMarkdown;
  