# Medical Data Bank

## Overview

This project is a simple web application built with React.js and Node.js for collecting audio data in a healthcare setting. It allows users to input information about a doctor, patient, and sound recording, which is then stored in a MongoDB database. The entered data is displayed in a table format below the form, with the ability to play the uploaded audio file.

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Anand-shreya/Jeeva_Dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Jeeva_Dev
   ```
3. Install dependencies for both the Frontend and Backend:

   ```bash
   cd Frontend
   npm install

   cd ..

   cd Backend
   node install express mongoose multer cors
   ```

4. Run the Frontend:

   ```bash
   cd Frontend
   npm start
   ```

5. Run the Backend in new terminal
   ```bash
   cd Backend
   node app.js
   ```

## NOTE

- You may replace username and password of database or can use the existing database
- Upon clicking the submit button for the first time, you will encounter an alert. Kindly proceed to submit again. I apologize for any inconvenience and actively working to resolve the issue.
