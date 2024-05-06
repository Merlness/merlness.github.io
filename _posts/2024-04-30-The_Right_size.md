---
title:  "The Right Size"
mathjax: true
layout: post
categories: media
---

When building a web application that handles image uploads, you might think knowing the size of an uploaded image would be straightforward—just read the Content-Length header, right? Well, it turns out it's not always that simple, especially when dealing with web forms.

Imagine you're sending a package to someone you love but need to include a form in the box. Or even packaging so your items arrive safely. These can add extra weight and size to the package, but the label on the box only tells you the total weight, not how much the contents or the form weigh individually. Similarly, when images are uploaded through a form, the Content-Length header tells us the total size of the entire package, not just the image.

This extra information can include things like the file's name and type and additional boundaries or markers used to separate different parts of the form.

The challenge comes in determining exactly where the image data starts and ends. Just as you might scan through a packed box to find the item you want, we have to carefully parse the content of the web form upload to find where the image data begins and where it ends.

For example, suppose an image is embedded in a form. The form might start with some text fields before the image data begins, and might even contain more data after the image.


Here’s a snippet showing how we might extract just the image size from such a form upload:

```java
public int getSize() { // Method to calculate the size of the image from the multipart form data
    String body = request.getBody();
    if (headers.containsKey("Content-Length")) {
        int length = Integer.parseInt(headers.get("Content-Length"));

        int beginning;
        if (body.contains("image/jpeg")) {
            beginning = body.indexOf("image/jpeg") + 16;
        } else {
            beginning = body.indexOf("image/png") + 15;
        }
        int end = body.length() - body.indexOf("------WebKit", body.indexOf("------WebKit") + 1);

        return length - beginning - end;
    }

    return -1;
}
```


What initially might seem like a simple task—reading a number from a header—can actually involve a deep dive into how data is transmitted over the web. This is important because we need to have the ability to find the true size of an object. This will help us with managing our files better.

By overcoming these challenges, developers can create more robust applications that handle user data effectively and efficiently, ensuring both functionality and user satisfaction.

Best,

Merl
