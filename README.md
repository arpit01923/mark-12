# Triangles App

## List of Contents
- Description
- Input
- Processing
- Output
- Link

>**Description:** 
Challenge your knowledge about triangle, by answering the questions in triangle quiz section. Calculate hypotenuse of a triangle by passing other two sides of triangle, similarly calculate area of a triangle by passing base and height of triangle.Learn about Triangle. Check whether it makes a triangle by passing three sides of a triangle

<br>

>**Input:** 
In `Triangle quiz` section a user has to select a radio button as input to answer questions. A user has to enter all inputs.
A user has to enter input in number format only for sections   `Length of Hypotenuse` and `Area of a triangle` and `Angle form a Triangle`, where input cannot be zero, and negative number.  

<br>

>**Processing:** 
- In Triangle quiz page a user has to select answer to question, and click on check answers button. For each correct a user will get +1 points and for incorrect  score remain same. Function clickHandler, check for input message.
- Click on button to get outcome on each page or section.
- In Hypotenuse of a triangle page, a user has to enter two sides (base, height) and then click on Calculate Hypotenuse button, on each input(side) function check side is called and checks for side not to be less then zero, not negative number, and other (if any). Then function calculate hypotenuse computes hypotenuse of two sides and updates user. Meanwhile if any error or input voilation occurs user is informed with message.
- In Area of triangle page, a user has to enter base(b) and height(h) of a triangle and to calculate area click on calculate area button. on each input function check side is called to check for side not to be less then zero, not negative number, not be a floating-point number and other (if any). Then function calulateArea calculates area of the triangle and updates the user. Meanwhile if any error or input voilation occurs user is informed with message.
- In Is Triangle section or page a user has to enter three sides of the triangle and click on Is Triangle button, on each input(side) function check angle is called and checks for side not to be less then zero, not negative number, not be a floating-point number and other (if any). Then function solveAngle checks wether three sides makes a traingle or not by computing sum of three sides. After that user is informed with message wether sides form a traingle or not.

<br>

>**Output:** 
Output will be a simple message, displaying whether its a triangle giving three sides of triangle, what will be the hypotenuse of a triangle giving two sides, what will be the area of a traingle giving base & height and what you scored in the quiz.

<br>

>**Link:**[Triangle App](https://arpit-triangle-app.netlify.app/)