// function that returns a license badge based on which license is passed in

const { default: ListPrompt } = require("inquirer/lib/prompts/list") //? what is this?

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license==="GNU GPL v2"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  if (license==="Apache 2.0 License"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license==="none"){
    return ""
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license==="MIT License"){
    return `
https://opensource.org/licenses/MIT`
  }
  if (license==="GNU GPL v2"){
    return `
https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  }
  if (license==="Apache 2.0 License"){
    return `
https://opensource.org/licenses/Apache-2.0`
  }
  if (license==="none"){
    return ""
  }
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license==="MIT License"){
    return `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  if (license==="GNU GPL v2"){
    return `
Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`
  }
  if (license==="Apache 2.0 License"){
    return `
You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

1. You must give any other recipients of the Work or Derivative Works a copy of this License; and
2. You must cause any modified files to carry prominent notices stating that You changed the files; and
3. You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and
4. If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.
You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.`
  }
  if (license==="none"){
    return ""
  }
}


// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
${renderLicenseBadge(answers.projectLicense)}
## Description
${answers.projectDescription}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${answers.projectInstallation}
## Usage
${answers.projectUsage}
## Credits
${answers.projectCredits}
## License
${answers.projectLicense}
${renderLicenseLink(answers.projectLicense)}
${renderLicenseSection(answers.projectLicense)}
## How to Contribute
${answers.projectContributing}
## Tests
${answers.projectTests}
## Questions
If you have any questions, feel free to reach me at : 
${answers.email}

To check out more of my work: 
https://github.com/${answers.username}
`;
}

module.exports = generateMarkdown; //this exporting the function