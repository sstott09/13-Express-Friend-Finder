## University of Denver 
## Class: DU_VIRT_FSF_PT_09_2019_U.O.MW
## Program: Full Stack Flex Online Part-Time
## 13-Express-Friend-Finder
...........................................................................................................

## Furry_Friend_Finder_Express
A matching tool to help you find a furry-friend that best matches your personality.

Looking for a new furry friend? Answer 10 simple questions and find dogs and/or cats who are compatible with you. You'll find a great companion in no time. 
Access this site at: https://stark-escarpment-59115.herokuapp.com/.

This is a full stack deployed website that matches the user up with a previous "furry-friend" that has similar answers to 10 questions that ask the user to rank statements on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree).

## Functionality
The home page, which is the default path, has one button to access the survey. There is also a link that will display the API information for all existing "furry-friends" in JSON.

## Technical Features
This application uses express to create a server that drives the content rendered to the page.
Express is also used to create an API for loading content and posting information from a new user.
There are two HTML pages and one page that displays the API content in JSON.

## Requirements
If you are running from the deployed Heroku site, then there are no requirements to use. You can access directly at https://stark-escarpment-59115.herokuapp.com/
Can also be found on GitHub at https://github.com/sstott09/13-Express-Friend-Finder

If you would like to fork this application and run directly, then you will need to run: npm install in the local folder.

Then run node server.js in the command line. If successful, the console will confirm the PORT that it is running. You will need to visit http://localhost:8080 to test the funcationality.

## Build Tools
* [Node.js] v10.16.3
* [Node packages]
    * express v4.17.1 (https://www.npmjs.com/package/express)
    * path v0.12.7 (https://www.npmjs.com/package/path)
* [Bootstrap]  https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css
* [jQuery]     https://code.jquery.com/jquery-3.4.1.min.js
* [AJAX]       https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
* [Chosen]     https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.css
* [Font_Awesome] https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css
* [Deployed_on_Heroku]