// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[license](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[license](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}


## Description
${data.description}


## Table of Contents
[Installation](#Installation)
[Usage](#usage)
[Credits](#contributing)
[License](#license)

## Installation
${data.command}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

### Contributing
${data.contributing}

### Tests
${data.test}

### Repo
${data.repo}

### Questions
If there are any questions please contact me ![${data.userName}](https://github.com/${data.userName}) 
Or please feel free to email me: [${data.userName}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
