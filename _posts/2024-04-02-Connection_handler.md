---
title:  "Connection Handler"
mathjax: true
layout: post
categories: media
---

onnection Handler

I wanted to show one of my proudest pieces of code.

Not necessarily because it was the most complex. On the contrary its only a switch case situation. But this method shows the connecting between my input and my output. This is where that magic connection happens. There is still a lot of work to do to make it better, but the fact I created this location, and it works just fine for right now is pretty awesome.

```java


public class RequestHandler {
   String path = ".";


   public RequestHandler() {


   }


   public RequestHandler(String path) {
       this.path += path;
   }


   public Response keepPath = FilePathHandler.generateResponse("Hello",
           "<h1>Hello!</h1><p>Welcome to My Server!</p>");
   ;


   public Response handle(Request request) {


       switch (request.getPath()) {
           case "/hello":


               return FilePathHandler.generateResponse("Hello",
                       "<h1>Hello!</h1><p>Welcome to My Server!</p>");


           case "/favicon.ico":
               return keepPath;


           case "/":
               FilePathHandler rootHandler = new FilePathHandler(path);
               this.keepPath = rootHandler.respondForContent();
               return rootHandler.respondForContent();


           case "/ping":
               keepPath = handlePing();
               return handlePing();


           case "/guess":
               keepPath = handleGuess();
               return handleGuess();


           default:
               FilePathHandler defaultHandler = new FilePathHandler(request);
               return defaultHandler.respondForContent();
       }
   }
```

This takes the request and sends out the response. Again it is very simple but to get to this point was awesome.

Anywho, just wanted to show the beautiful connection.

Best,

Merl
