# I have build a REST API with Node JS and Express

This is a code repository contain the code for REST API that i have created using Node Js and Express.
this project use express, uuid and dotenv dependencies.
I have made the controllers using try and catch method if the request get failed by any reson the server will return a response 400 and if it succed it will return 201.
i have implemented 4 API Requests
1. createUser: it will create a user according to the parameter that we paas with the body. its a post request 
2. getUserById: it will give the user info when we provide the Id as a parameter. it is a get request.
3. deleteUserById: it will delete the user info when we provide the Id as a parameter. it is a delete request.
4. updateUserById: it will update the user info when we provide the Id as a parameter. it is a patch request.

we can connect this server with a no sql data base for scaling. if we want to connect it with SQL database we have to predefine the user schema.

# How to Start the server 
1. Rename the .env.sample to .env because .env file is our envoinment file and git does not commit it so we have to rename it to something other.
2. "npm install" : it will install all the dependencies that our project required.
3. "npm run server" : it will start our server on our predefined port.

Name: Prahlad Pawar
Email id: pcube17303@gmail.com
Thank You