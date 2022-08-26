function renderLicenseBadge(license) {
  let yourLicense = "";
  yourLicense = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  return yourLicense;
}

function renderLicenseLink(license) {
  if (license === "GNU") {
    return `[GNU](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license === "MIT") {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (license === "Apache") {
    return `[Apache](https://choosealicense.com/licenses/apache)`;
  }
}

function generateMarkdown(data) {
  return `## ${data.title}
  
  ${renderLicenseBadge(data.license)}
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

  ${renderLicenseLink(data.license)}
  
  # contributing
  
  ${data.contributions}
  
  # tests
  
  ${data.testing}
  
  # contact
  
  ${data.email}
  [${data.GitHub}](https://github.com/${data.GitHub})`;
}

module.exports = generateMarkdown;
