# React Questionnaire

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

All you need to start is:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features
* Build Quiz: Add a question and 2-4 answers. A question and at least two answers are required.
* Preview Quiz: Displays all questions in the order they were added. Can remove individual questions or can delete all questions.
* Preview Results: See results in real time as you select them. Results will be deleted if the question is deleted.
* Local Storage: Submitted questions will be preserved on page refresh.

## Dependencies
* Bootstrap 3.3.7 - CSS pulled in via CDN
* node-sass for Sass pre-processing

## Accessibility Considerations
* Proper heading structure
* Appropriate aria-labels for individual Remove buttons to provide context
* Each form element has a unique ID and is linked to a label with the for attribute (in React, htmlFor)
* Verified for WCAG 2.0 contrast requirements using WAVE

## Potential Enhancements
* Different types of questions (such as short answer). True/false can be handled with existing functionality, albeit a bit clunkily (would have to enter "True" or "False" for each question).
* Statistics, such as averaging a satisfaction rating.
* The Add Question button validates the first two fields only. It would be ideal to validate for any two fields.
* Dynamic number of answers (currently limited to 4).
