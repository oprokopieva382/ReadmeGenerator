//function that returns a license badge based on which license is passed in
const renderLicenseBadge = (license) => {
  const LicenseBadgeColor = {
    MIT: "MIT-yellow.svg",
    GNU: "GPLv3-blue.svg",
    Apache: "Apache%202.0-blue.svg",
  };

  if (LicenseBadgeColor[license]) {
    return `https://img.shields.io/badge/License-${LicenseBadgeColor[license]}`;
  } else {
    return "";
  }
};

//function that returns the license link
const renderLicenseLink = (license) => {
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
};

//function that returns the license section of README
const renderLicenseSection = (license) => {
  const licenseText = {
    MIT: `This project is licensed under the MIT License`,
    GNU: `This project is licensed under the GNU General Public License`,
    Apache: `This project is licensed under the Apache License`,
  };

  if (licenseText) {
    return licenseText[license];
  } else {
    return "";
  }
};

//function to generate markdown for README
const generateMarkdown = ({
  license,
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  username,
  email,
}) => {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  let linkText = renderLicenseSection(license);
  return `
  ## ${title}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
[![License Badge](${badge})](${link})
  ${linkText}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions find me on [GitHub](https://github.com/${username}) or feel free email me ${email}


`;
};

module.exports = generateMarkdown;
