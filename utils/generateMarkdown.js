// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = "";
  if (licenseType === "GNU") {
    yourLicense = `![License: GNU] (![GNU](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)`;
  } else if (licenseType === "??") {
  }
  return yourLicense;
}
// apache
// gnu
// mit
// isc

//if else statements
//return will call functions within generateMarkdown
//${}data.title

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  
  ## table of contents
  
  1. [description] (#description)
  
  2. [installation] (#installation)
  
  3. [usage] (#usage)
  
  4. [license] (#license)
  
  5. [contributing] (#contributing)
  
  6. [tests] (#tests)
  
  7. [contact] (#contact)
  
  # description
  
  ${data.project}
  
  # installation
  
  ${data.install}
  
  #usage
  
  ${data.usage}
  
  # license
  
  ${data.license}
  
  # contributing
  
  ${data.contributions}
  
  # tests
  
  ${data.testing}
  
  # contact
  
  ${data.email}
  ${data.GitHub})`;
}

module.exports = generateMarkdown;
