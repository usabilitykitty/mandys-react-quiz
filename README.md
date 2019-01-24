# React Questionnaire

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies
* Bootstrap 3.3.7 - CSS pulled in via CDN
* node-sass for Sass pre-processing

## Accessibility Considerations
* Proper heading structure
* Appropriate aria-labels for individual Remove buttons to provide context
* Each form element has a unique ID and is linked to a label with the for attribute (in React, htmlFor)
* Verified for WCAG 2.0 contrast requirements using WAVE
