---
title:  "Get bodies"
mathjax: true
layout: post
categories: media
---


I have to say one of the randomly surprisingly challenging tasks has been to get the information from the body of a request.



Let me take you back a little bit. I wanted to create a text box that can take information in ther server. This was very straight forward, there are many places to find this information

```java
"<form action=\"/guess\" method=\"post\">" +
"Please enter your guess between 1 to 100: "
+
"<input type=\"number\" name=\"guess\" " +
"min=\"1\" max=\"99\" placeholder=\"37\"></form>"

```
Post sends it as the request.

And I can place the input type with the parameters I would like. Also `guess` is the name of the id that will come with the number in the body of the request.

The request will contain the title as well as the headers that coincide with the message.

However under the headers is the body of the message.

For Example:


POST /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

field1=value1&field2=value2
I had no idea it would be so tough to get the information like field1.

After quite some time I was able to come up with this solution.

```java
if (isPost(requestString) && headers.containsKey("Content-Length")) {
   int contentLength = Integer.parseInt(headers.get("Content-Length").trim());
   char[] bodyChars = new char[contentLength];
   int readChars = bufferedReader.read(bodyChars);
   requestBody = new String(bodyChars, 0, readChars);
}
```
This allows me to see if requestString has `POST` as the method. And if content length is present. This means there will be a body present under the headers.

Now I have to find how long the content length is and create an array the size of the content length.

Now I can take that information and recreate the useful information present in the body. Sometimes the smallest tasks can present the gretest challenges.

The small tasks do add up to make a wonderful project!

Best,

Merl 
