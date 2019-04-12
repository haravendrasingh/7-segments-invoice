## how to run code
1. run npm install
2. run node app.js

## How to use
1. need postman or any rest  api call environment
2. In this assignment I have written two api
    1. get api http://localhost:5000/v1/app/macro-polo
        - to get list of macro polo game
    2. post api http://localhost:5000/v1/app/parsed-segments
        - pass form-data/multipart data in request body
        - parsed 7-segment invoice number to invoice number
        - get response of numbers

## When is it a good idea to not use NodeJs? Why?
- I think Node.js is not appropriate in the below cases
   1. It is not good option for CPU intensive applications.
   2. Not good option if you don not have JavaScript capabilities in the team.
   3. May not be ready for all kinds enterprise application development and integration when        compared with Java.