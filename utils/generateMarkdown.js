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

  if (LicenseLinks) {
    return LicenseLinks[license];
  } else {
    return "";
  }
}

//function that returns the license section of README
function renderLicenseSection(license) {
  const licenseText = {
    MIT: `This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.`,
    GNU: `This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0) for details.`,
    Apache: `This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) for details.`,
  };

  if (licenseText) {
    return licenseText[license];
  } else {
    return "";
  }
}

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
