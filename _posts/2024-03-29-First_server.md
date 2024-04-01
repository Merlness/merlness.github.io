---
title:  "First Server"
mathjax: true
layout: post
categories: media
---

I am in the process of creating my first server in Java.

The problem is, it is quite challenging. The concept is simple, it is a server listens on a port for a request in a particular protocol and returns a response.

Now to write this into code is something different especially with new tools, in the language I am slowly progressing it.

Now first I need to make a “socket” in order to communicate. For me the socket is properly named because it is what connects the client and server. It is what “listens” for the connection on the port.

Next I need to accept the connection to the server. In this case I just want to make something super simple that I can see in my local host. In this case it is “hello”.

In order to write hello I noticed I needed to use `PrintWriter`  in order to send data to the client. But I am getting ahead of myself. The socket has an input and an output. So in order to send information to the client I need to create an output stream in order to communicate.


Finally I can send a message, but it must find the simplest way to do this in http.
HTTP needs the status line, the header, and an optional body which I will place here. Again this is super simple but, it was my first one and hopefully I can grow more to help make better servers and just be a better programer in general.

```java
public class Main {
   public static void main(String[] args) throws IOException {
       var server = new ServerSocket(1234);
       while (true) {
           try (var socket = server.accept()) {
               var oStream = socket.getOutputStream();
               var writer = new PrintWriter(oStream, true);


               writer.println("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<p>Hello</p>");


           }
       }
   }
}

```

Best,

Merl
