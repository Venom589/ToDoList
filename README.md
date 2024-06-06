<h2><b>ToDoList</b></h2>
<hr>
<h4>Flow of project</h4>
https://github.com/Venom589/ToDoList/assets/89624224/0fea48b6-295c-4b6e-88c4-f5b1be2f9c75

<br><hr>
<h4>This following libraries are used :-</h4>
<h5>1-Express</h5>
Which is used to create server and routers.
<br>
<h5>2-Mongoose</h5>
Which is used to create connection for MongoDB and theit schema and model.
<br>
<h5>3-Cron</h5>
Which is used to create a cron job for updating completionStatu of task as late which runs every day once.
<br>
<h5>4-Joi</h5>
Which is used to create validations for all the request before sending request data to controller.
<br>
<h5>5-jsonwebtoken</h5>
Which is used for login of an user and verification for other requests regarding task.
<br>
NOTE:-DO not forget to add bearer token in headers for task access
<br>
<h5>6-nodemon</h5>
Which is used for server to be in always running state. It start server again if any code changes made in project.
<br>
<h5>7-bcrypt</h5>
Which is used for encryption of user password during Signin and for validate of password during Login.
<br>
<h5>8-dotenv</h5>
Which is used to configure environmental variables for database connection, server port and JWT secret.
<br>
<h5>9-body-parser</h5>
Which is used for parsing body received from user during HTTP request.
<br>
<hr>
<h4>How to setup</h4>
step 1- Install all require libraries.

step 2- Create an config.env file at config folder add 3 things in it:-<br>
<br>
        1-DB(local Database URL)<br>
        2-PORT(Specify port of server)<br>
        3-JWT_SECRET(json web token secret key)<br>

step 3- Start server using for test using command "npm test".
<br>
<h4>You can successfully run it now.</h4>
<hr>
<h4><b>List of operations</b></h4>

<h5>1-Signin</h5>
Link-localhost:{PORT|5000}/signin<br>
Method-Post
<br>
<pre>
  request-Data
{
    "username":"userfirst",
    "password":"User@123",
    "email":"user@example.com"
}
</pre>
<br>

<h5>2-Login</h5>
Link-localhost:{PORT|5000}/login<br>
Method-Post
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "password":"User@123"
}
</pre>
<br>

<h5>3-Create-task</h5>
Link-localhost:{PORT|5000}/create-task<br>
Method-Post
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "title":"test1title",
    "category":"Work/Professional",
    "endDate":"31-12-2024",
    "priority":"High"
}
</pre>
<br>

<h5>4-View-all-pending</h5>
Link-localhost:{PORT|5000}/view-all-pending<br>
Method-Post
<br>
<pre>
  request-Data
{
    "email":"user@example.com"
}
</pre>
<br>

<h5>5-View-all-completed</h5>
Link-localhost:{PORT|5000}/view-all-completed<br>
Method-Post
<br>
<pre>
  request-Data
{
    "email":"user@example.com"
}
</pre>
<br>

<h5>6-View-one-task</h5>
Link-localhost:{PORT|5000}/signin<br>
Method-Post
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "taskId":"6660b490903fcebd502fa0ac" // enter valid mongoose object id which exist
}
</pre>
<br>

<h5>7-Edit-task</h5>
Link-localhost:{PORT|5000}/signin<br>
Method-Patch
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "taskId":"6660b490903fcebd502fa0ac",
    "title":"TestUpdate",
    "endDate":"16-12-2025",
    "desc":"test material for description",
    "category":"Valid category only"
    "priority":"Valid Priority only"
}
</pre>
<br>

<h5>8-Mark-as-done</h5>
Link-localhost:{PORT|5000}/mark-done<br>
Method-Patch
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "taskId":"6660b490903fcebd502fa0ac"
}
</pre>
<br>

<h5>9-Detete-task</h5>
Link-localhost:{PORT|5000}/detete-task<br>
Method-Delete
<br>
<pre>
  request-Data
{
    "email":"user@example.com",
    "taskId":"6660b490903fcebd502fa0ac"
}
</pre>
<br>
