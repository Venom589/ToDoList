<h2><b>ToDoList</b></h2>
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
