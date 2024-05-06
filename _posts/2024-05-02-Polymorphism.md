---
title:  "Polymorphism"
mathjax: true
layout: post
categories: media
---
 
I remember first hearing this phrase while watching the Clean Code series with Uncle Bob. It sounded like a spell from Harry Potter and I had no idea what in the world it meant.

I mean, the root words mean “many forms” but I did not know how that related to code.

Now, after months in my apprenticeship I have learned what it actually means and how to implement it.

Below I will provide my old code:

```java
public Response handle(Request request) {
   String requestPath = request.getPath();


   if (requestPath.startsWith("/ping")) {
       return new Ping().handlePing(requestPath);
   } else if (requestPath.equals("/hello")) {
       return FilePathHandler.generateResponse("Hello",
               "<h1>Hello!</h1><p>Welcome to My Server!</p>");
   } else if (requestPath.equals("/guess")) {
       return guessingGameHandler.handle(request);
   } else if (requestPath.contains("/form")) {
       return FilePathHandler.generateResponse("Form", new FormHandler(request).handle());
   } else if (requestPath.startsWith("/listing")) {
       ListingHandler listingHandler = new ListingHandler(rootDirectory, requestPath);
       String html = listingHandler.listDirectoryContents();
       return FilePathHandler.generateResponse("Directory Listing", html);
   }
   return handleDefaultPath(requestPath);
}
```

Not very elegant. And of course, this violates the O(pen/closed) in the SOLID principles. If i want to ass a new handle for a particular path, I would need to go into this code and create a new `else if` statement.

This can become quite ridiculous after a while, plus that means I need to go into old code and make changes every time. This is not great for growth. It would be nice to just plug in a new extension.

Here comes in my new interface.

```java
public interface IRequestHandler {
     Response handle(Request request);
     boolean canHandle(Request request);
}

```
Of course over time, I might look at this like I look at my previous code but this now follows OCP.

First I check to see if my specific request handler `canHandle`, then I handle it.

```java
    private List<IRequestHandler> handlers;

    private void defaultHandlers() {
        handlers.add(new PingHandler());
        handlers.add(new HelloHandler());
        handlers.add(new GuessingGameHandler());
        handlers.add(new FormHandler());
        handlers.add(new ListingHandler(rootDirectory));
    }

    @Override
    public Response handle(Request request) {
        for (IRequestHandler handler : handlers) {
            if (handler.canHandle(request)) {
                return handler.handle(request);
            }
        }
        return handleDefaultPath(request.getPath());
    }

    public void addHandler(IRequestHandler handler) {
        handlers.add(handler);
    }

```

This is great now because If I do want to add in a new handler I can just use this new method and I won’t have to change my previous code.

There is a potential problem that I see. If my list of handlers becomes massive then this `for loop` will slow down my program.

It would be nice to make this into a hash map for the speed, but `/ping` and `/listing` are a problem because they take in arguments like `/ping/2` or `/listing/path/to/somewhere`.

At least for now I am pleased that I got rid of that ridiculous conditional and finally implemented polymorphism.

Best,

Merl
