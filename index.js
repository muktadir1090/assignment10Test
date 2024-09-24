const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

// Prompt the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: (input) => input.length <= 3 || 'Text must be 3 characters or less',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color (keyword or hexadecimal):',
  }
])
.then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeObj;

  switch (shape) {
    case 'Circle':
      shapeObj = new Circle();
      break;
    case 'Triangle':
      shapeObj = new Triangle();
      break;
    case 'Square':
      shapeObj = new Square();
      break;
  }

  shapeObj.setColor(shapeColor);

  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeObj.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  // Write the SVG content to a file
  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});