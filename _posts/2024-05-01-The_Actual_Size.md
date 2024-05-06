---
title:  "The Actual Size"
mathjax: true
layout: post
categories: media
---

I want to correct what I displayed yesterday. I am unsure if I was thinking too simply or over complicating it.  

In reality I was not specific enough to be simple.

The answer was right in front of me the whole time. One of the headers had the content type, but what I glossed over was it also contained the exact boundary that was being used.

# Content-Type: multipart/form-data; boundary=------WebKitFormBoundaryXYZ
That is an example of the boundary but it would look very similar. My problem was whenever I made tests and also uploaded files into any web browser, the boundary would have the same exact structure so, the code I posted below would be consistent.

Again the code was too reliant on the consistency of the data provided. This is bad code in general but also, for several reasons and one of the major reasons is when I would pass through the clojure tests for finding the size of the uploaded files, it would give me a completely different answer.

Maybe you see where this is going. I never made a print statement, so I don’t know what the boundary looked like for the clojure tests but I can tell you, one way or another it had a different structure. This means my previous code which was general and dependent on consistency did not account for a different boundary.

I hard coded in what I thought the boundary would be rather than use the boundary that the header provided.

Very silly indeed. Below is my correction to the problem. And since this correction I have been correct to the byte when it comes to finding the size of any upload.

```java

//"------WebKitFormBoundaryXYZ\n" +
//       "Content-Disposition: form-data; name=\"file\"; //filename=\"testfile.jpeg\"\n" +
//       "Content-Type: text/plain\r\n" +
//       "\r\n" +
//       "This is the content of the file." +
//       "\r\n------WebKitFormBoundaryXYZ--";


  public int getSize() {
        String body = request.getBody();
        if (headers.containsKey("Content-Length")) {
            int length = Integer.parseInt(headers.get("Content-Length"));

            int headerEndIndex = body.indexOf("\r\n\r\n") + 4;

            int lastBoundaryIndex = body.lastIndexOf("\r\n--");
            if (lastBoundaryIndex == -1) lastBoundaryIndex = body.length();

            String sub1 = body.substring(0, headerEndIndex);
            String sub2 = body.substring(lastBoundaryIndex);

            return length - sub1.length() - sub2.length();
        }
        return -1;
    }

```

I have mixed feelings when a problem that takes up so much of my time comes out to a simple solution, it is great it was so simple. Why didn’t I think of this earlier? Hopefully in due time. I will.

Best,

Merl
