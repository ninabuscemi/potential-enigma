// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
  return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  } else {
    return ''; // Returns an empty string if no license is provided
  }
}

function renderLicenseLink(license) {
  if (license) {
  return `[License Link](https://opensource.org/licenses/${license})`;
  } else {
    return ''; // Return an empty string if no license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Cost](#cost)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Cost
- Estimated Cost: ${data.cost} ${data.currency}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
