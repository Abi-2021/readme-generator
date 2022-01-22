const badgeUrlBuilder = function (licenseName){
    return `https://img.shields.io/badge/License-${licenseName}.svg`
}

const licenses = {
    'Apache 2.0': {
        badgeUrl: badgeUrlBuilder('Apache_2.0-blue'),
        linkUrl: 'https://opensource.org/licenses/Apache-2.0',
    },
    'Boost Software License 1.0': {
        badgeUrl: badgeUrlBuilder('Boost_1.0-lightblue'),
        linkUrl: 'https://www.boost.org/LICENSE_1_0.txt',
    },
    'BSD 3-Clause License': {
        badgeUrl: badgeUrlBuilder('BSD_3--Clause-blue'),
        linkUrl: 'https://opensource.org/licenses/BSD-3-Clause',
    },
    'GNU GPL v3': {
        badgeUrl: badgeUrlBuilder('GPLv3-blue'),
        linkUrl: 'https://www.gnu.org/licenses/gpl-3.0',
    },
    'BSD 2-Clause License': {
        badgeUrl: badgeUrlBuilder('BSD_2--Clause-orange'),
        linkUrl: 'https://opensource.org/licenses/BSD-2-Clause',
    },
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') return '';
    return licenses[license].badgeUrl;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') return '';
    return licenses[license].linkUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') return '';
    return `[![license](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [License](#license)
    
## Installation
${data.installation}
    
## Usage
${data.usage}
      
## Guidelines
${data.guidelines}
       
## License
${data.license}
      
## Badges
${renderLicenseSection(data.license)} 

## Test
${data.test}

## Contact
[GitHub](https://github.com/${data.githubUsername})  
[Email](mailto:${data.email})
`;
}
module.exports = generateMarkdown;

