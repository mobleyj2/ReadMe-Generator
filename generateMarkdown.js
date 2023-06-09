// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data){
if (data = 'MIT'){
  return `![](https://img.shields.io/badge/License-MIT-yellow.svg)`
}
if (data = 'BSD'){
  return `![](https://img.shields.io/badge/License-BSD-blue.svg)`
}
if (data = 'GPL'){
  return `![](https://img.shields.io/badge/License-GPL-green.svg)`
}
}
//[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//[MIT][('https://img.shields.io/badge/License-MIT-yellow.svg')]('https://opensource.org/licenses/MIT')

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `${renderLicenseBadge(data.lic)}
# Title
  ${data.name} 
  
# Table of Contents
 1. -[Title](#title)
 2. -[Description](#description)
 3. -[Lisences](#lisences)
 4. -[Usage](#usage)
 5. -[Questions](#questions)
 6. -[Installation](#installation)
 7. -[Contributions](#contributions)
 8. -[Test](#test)

---

## Description
  ${data.description}

---

## Lisences
  ${data.lic}

---

## Installation
  ${data.Ins}

---

## Usage
  ${data.use}

---

## Contributions
  ${data.cont}

---

## Test
  ${data.test}

---

## Questions
  ${data.questions}

  
  (http://github.com/${data.github})

  ${data.questions1}

  #https://drive.google.com/file/d/1y6lwiofpmr781z6Icx-dKiWuU0DZy5_k/view

---



`;

};


module.exports = generateMarkdown;

