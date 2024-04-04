---
title:  "Inconsistent Bug"
mathjax: true
layout: post
categories: media
---



Let me tell you about an inconsistent bug I had. Which I have now learned is more disruptive than a consistent but because, a consistent bug is slightly easier to understand.

Next, let me provide the code that was giving me problems before.

```java
public void start() {
       System.out.println("Server is running");


       try {
           var server = new ServerSocket(port);
           while (true) {
               try (var socket = server.accept()) {
                   var oStream = socket.getOutputStream();
                   var writer = new PrintWriter(oStream, true);


                    var request = new String(socket.getInputStream().readNBytes(64)); //problem starts here




                   System.out.println(request);
                   System.out.println();




                   RequestHandler handler = new RequestHandler(rootDirectory);
                   Response response = handler.handle(Request.fromString(request)); //error call here
                   writer.println(response);
               }
           }
       } catch (IOException e) {
           throw new RuntimeException(e);
       }
   }


//from string method here
public static Request fromString(String request) {
   try {
       int startIndex = request.indexOf("/");
       int endIndex = request.indexOf("HTTP");


       String path = request.substring(startIndex, endIndex).trim();
       String method = request.substring(0, startIndex).trim();


       return new Request(method, path);
   } catch (Exception e) {
       throw e;
   }
}
```

Initially my `fromString` method was simpler, I split the request by the spaces and chose the first and second to be the `path` and `method`. Since I got this error I changed `fromString` in case that was the problem.

The same inconsistencies arose. It took some time but finally I was finally able to see the perpetrator. It is where I said the problem started from. The problem is it reads the bytes well, but if something unexpected happens it sends an empty array. I noticed this when my `fromString` method was telling me both indexes were -1.

This means those values didn’t exist.

So I went back to the docs and found this new solution.


```java




var input = new InputStreamReader(socket.getInputStream());
var buffInput = new BufferedReader(input);
var requestString = buffInput.readLine();

//                    var request = new String(socket.getInputStream().readNBytes(64));

```

Now it is longer but it is more robust. It might have problems later, but for now it works consistently!

Best,

Merl
