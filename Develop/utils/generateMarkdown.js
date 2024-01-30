function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'Apache 2.0') {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === 'GPL 3.0') {
    return `![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'BSD 3-Clause') {
    return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return ''; // Returns an empty string if no license is provided
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache 2.0') {
    return `[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL 3.0') {
    return `[License: GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
  } else if (license === 'BSD 3-Clause') {
    return `[License: BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return ''; // Returns an empty string if no license is provided
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

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

${renderLicenseSection(data.license)}
${licenseLink} ${licenseBadge}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
