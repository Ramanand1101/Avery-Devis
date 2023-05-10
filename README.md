## ABOUT THE PROJECT
<h1> Avery Devis </h1>
<div align="center"  width="40" height="55">
  <img src="https://github.com/Ramanand1101/Avery-Devis/blob/main/Frontend/Avery%20Devis%20Logo.jpg" alt="html" width="200" height="100"/>
  <br>
  <br>
  <p>Avery Devis is a renowned British clothing brand specializing in high-quality menswear. Their website serves as an online platform where customers can browse and purchase a wide range of stylish and sophisticated clothing items, including shirts, suits, trousers, jackets, knitwear, shoes, and accessories. </p>
  <br>
</div>

## TECH STACKS USED

<p align = "center">
<img src="https://github.com/PrinceCorwin/Useful-tech-icons/blob/main/images/HTML.png" alt="html" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" width="50" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png" alt="redis" width="50" height="50"/>
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>
<hr>

## Features 
-  Authentication
-  API Validation
-  Responsive
-  Cross Platform
-  Different Interface for both Users and Trainers
-  Registeration/Signin/Logout
-  Admin can perform all CRUD operations

## Run Locally
### Clone this Project

```
https://github.com/Ramanand1101/Avery-Devis.git
```

### Install npm Packages

```javascript
npm i --global
```

### Go to Backend Folder
```javascript
cd Backend
```

### Run Server
```javascript
npx nodemon index.js
```
### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)


## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- **port** : this is a port of website server
- mongoUrl: this is the connection string of your MongoDB Atlas database.

- **GMAIL_EMAIL**, **GMAIL_PASSWORD** : the email and password given to nodemailer to send/receive the email. Please put a real email and password here because you will receive the messages sent from the contact us form on this email.

- **ADMIN_EMAIL**, **ADMIN_PASSWORD** : the email and password used to log into the admin panel using AdminBro. You can put any email and password here.

- **redis_url** : Use a secure and unique method to generate the Redis URL for secure connection and data storage.

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1" alt="nodemailer" width="50" height="70"/>
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>
<img src="https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png" alt="redis" width="50" height="50"/>
</p>
   
   
## API Endpoints
   #### Welcome
```javascript
GET  /
```
  #### Registration
```javascript
POST  /user/register
```
  #### Signin
```javascript
POST  /user/login
POST  /user/logout

```
#### User 
```javascript
POST /user/
POST /user/login

```
  #### Product
```javascript
GET /product/
POST /product/create
DELETE /doctor/delete
```
    
   
<div align = "center">  
  
  
| `Project Highlights` |
| :------------------: | 

 <div align = "center">
   <h2>Landing Page</h2>
   <img width="956" alt="Landing_Page" src="https://github.com/Ramanand1101/Avery-Devis/blob/main/Frontend/Screenshot%202023-05-10%20142657.png">
   <h2>Sign-up/Sign-In Dashboard</h2>
   <img width="960" alt="User_Dashboard" src="https://github.com/Ramanand1101/Avery-Devis/blob/main/Frontend/Screenshot%202023-05-10%20142730.png">
   <br>
    
   

   <br>
  
   
   <br>
<div/>
  <br>

| `Demo` |
| :----: | 
   

[FRONTEND](https://jocular-genie-ed49c8.netlify.app/)



 
| `Authors` |
| :-------: | 

 [RAMANAND TIWARI](https://github.com/ramanand1101) 
 
