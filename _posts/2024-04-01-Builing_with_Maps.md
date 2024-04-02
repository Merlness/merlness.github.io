---
title:  "Building With Maps"
mathjax: true
layout: post
categories: media
---

I am progressing in understanding how to make a server text and I wanted to make a class that allowed me to help produce information with the least amount of information possible.

Here wer begin with the few status codes that I am using at the moment
```java
static final Map<Integer, String> statusCodes = Map.ofEntries(
       entry(200, "OK"),
       entry(404, "Not Found"),
       entry(405, "Method Not Allowed")
);

```
Now I have a map that contains the codes along with their message.

Next I have one of my constructors, the other ones have less options if you want to make a simpler message but here is the overal idea
```java
public Message(Integer statusCode, String header, String body) {
   this.statusCode = statusCode;
   this.header = new HashMap<>();
   this.body = body;
}
```
I already have my status code that I provided but you see a new hashmap arises.

It maybe that I have maps on the brain or it might be that a Map is necessary for the `header`.
More on this later.

I created this new method to add headers if you need to

```java
public void addHeader(String key, String value) {
   this.header.put(key, value);
}
```

Now back to why it is necessary  to have a map here. Initially I just had my header as a string, then I would just add to it. This works in theory if you make no mistakes. This is, something I need to always keep in mind while I progress.

It can work if you perfectly put the correct headers in there. As you know you can place as many headers as possible in there, but what happens when you placed the incorrect one? Or You changed your mind later and wanted a different header?

If I just kept adding to the string then there would be some unexpected errors. Now with my map, if I add my new Header with the same key, it will just replace what I had previously. This allows for more flexibility and less breaking of the system.

Now we have the final `toString` method that allows us to bring the information back to life, or into a text that is readable by the socket.

```java
@Override
public String toString() {
   StringBuilder headerString = new StringBuilder();
   for (Map.Entry<String, String> entry :header.entrySet()){
       headerString.append(entry.getKey());
       headerString.append(": ");
       headerString.append(entry.getValue());
   }


   return "HTTP/1.1 " + statusCode + " "
           + statusCodes.get(statusCode)
           + "\r\n" + headerString + "\r\n" + body;
}

```
The for loop allows me to append evey pair value into the `headerString`.
This allows me to finally return the text in this awesome return statement.

Slowly but surely, things are falling into place.

Best,

Merl
