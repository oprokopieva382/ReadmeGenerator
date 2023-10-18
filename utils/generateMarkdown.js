//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const LicenseBadgeColor = {
    MIT: "MIT-yellow.svg",
    GNU: "GPLv3-blue.svg",
    Apache: "Apache%202.0-blue.svg",
  };

  if (LicenseBadgeColor) {
    return `https://img.shields.io/badge/License-${LicenseBadgeColor[license]}`;
  } else {
    return "";
  }
}

//function that returns the license link
function renderLicenseLink(license) {
  const LicenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    GNU: "https://www.gnu.org/licenses/gpl-3.0",
    Apache: "https://www.apache.org/licenses/LICENSE-2.0",
  };

  if(LicenseLinks) {
    return LicenseLinks[license]
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  //! still need to check if work
  [!License Badge](${badge})(${link})

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions find me on [GitHub](https://github.com/${data.username}) or feel free email me ${data.email}


`;
}

module.exports = generateMarkdown;
