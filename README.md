# School-Management-System
## Warning!! ##
This project is already in production, base on where you deploy kindly change the Enviroment variable to ur setting.

## How To Use ##
- You'll firstly needed to create an Admin account in order to create members account, that you can give to your team-member to join.
To create an admin account:
- You can either use VS-code-studio extension, thunder-client or Application Insomnia.
- Input your localhost-Port, use HHTP-Type:POST
- Inside server folder look for task schema, to find the requirement input for creating Admin account

## Enviroment Configuration ##
### Server:
+ first create a file named ".env" then we'll get into configuration
+ NODE_ENV=....\
  keep it that way, change when put in production.
+ MONGODB_URI=....\
  go to [mongodb](https://account.mongodb.com/account/login) website then create a cluster and connect, choose Driver And Clients... then it'll give you a link, copy and paste in this variable.
+ JWT_SECRET=...\
  for this you can generate a random hash by run these commands in your cmd.
  ```
  node
  require('crypto').randomBytes(64).toString('hex')
  ```
+ PORT=...\
  keep it that way or change on you.


## Features ##
#### Create and Assign Task && Subtask for one's self and other: "Admin"
#### View and Add activities: "Admin", "Users"
#### Edit, Delete, Restore Tasks: "Admin"
#### Generate Users: "Admin"
