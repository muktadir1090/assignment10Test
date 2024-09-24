# assignment10Test
Logo Generator

Description

The Logo Generator is a command-line application that allows freelance web developers to quickly create simple logos for their projects without hiring a graphic designer. The user can input a short text, choose text and shape colors, and select a shape. The application will generate an SVG file based on the user’s input.

User Story

As a freelance web developer,
I want to generate a simple logo for my projects,
so that I don’t have to pay a graphic designer.

Acceptance Criteria

	•	GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters.
	•	WHEN I am prompted for the text color
THEN I can enter a color keyword (or a hexadecimal number).
	•	WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square.
	•	WHEN I am prompted for the shape’s color
THEN I can enter a color keyword (or a hexadecimal number).
	•	WHEN I have entered input for all the prompts
THEN an SVG file is created named logo.svg, and the output text “Generated logo.svg” is printed in the command line.
	•	WHEN I open the logo.svg file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered.

Technologies Used

	•	Node.js: For running the command-line application.
	•	Inquirer: For gathering user input in the terminal.
	•	File System (fs): To generate and save the SVG file.
	•	Jest: For testing (if applicable).

Installation

To install and run the application locally, follow these steps:

	1.	Clone the repository:
    git clone <repository-url>

    2.	Navigate to the project directory:
    cd logo-generator
3.	Install the required dependencies:

npm install

#Usage

	1.	Run the application in the terminal:
    node index.js
    2.	You will be prompted to:
	•	Enter up to three characters for the logo.
	•	Choose a text color (keyword or hexadecimal).
	•	Choose a shape from circle, triangle, or square.
	•	Choose a shape color (keyword or hexadecimal).
	3.	After entering all inputs, the application will generate a file named logo.svg.
	4.	Open the logo.svg file in a browser to view the generated logo, which will have the following specifications:
	•	Dimensions: 300x200 pixels
	•	Shape and text based on the user’s input.

Example

After running the application and inputting your choices, you should see something like this:

Generated logo.svg
Open logo.svg in your browser to see your generated logo.


##Screen Shot :
![Screenshot 2024-09-24 at 1 32 01 AM](https://github.com/user-attachments/assets/82dcd4cf-20cc-4388-85de-f9164f9a0248)

![Screenshot 2024-09-24 at 1 41 36 AM](https://github.com/user-attachments/assets/0bdc833e-3b86-41af-b3fa-de09e9ee3d63)

![Screenshot 2024-09-24 at 1 49 07 AM](https://github.com/user-attachments/assets/28a28f7f-4f53-41a7-9b90-b0eb9dae6f3c)

![Screenshot 2024-09-24 at 1 50 27 AM](https://github.com/user-attachments/assets/6d2cefec-edeb-40a4-9f3a-7e31a0fcc814)


##Video Link : https://drive.google.com/file/d/1kMVZnVzh7wScqarsHwVNSK8v1qyjRN1P/view?usp=sharing

##License

This project is licensed under the ISC License.


##Tests

To run the tests for this application:
npm test



