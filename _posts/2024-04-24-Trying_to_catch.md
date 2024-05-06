---
title:  "Trying to Catch"
mathjax: true
layout: post
categories: media
---

The try catch block has been quite helpful in helping me keep my server running. While I was creating my server, every now and then it would just randomly stop working.

There were many reasons for this. Sometimes it was a bug, sometimes it was unhandled situations, but all in all it was because my code just wasn't very good.

Insert the try catch and this was quite the savior. It helped allow my server to keep working even though there may have been problems with my code.

I think the problem now is that I have been using it too much.

I refactored it now but it was possible when I began using the try catch blocks I may have had 3 of those blocks in one method. That just feels wrong.

One way to avoid this has been by refactoring the code and trying to remove the logic that caused me to bring out the block, the other has been to make even smaller methods, Single Responsibility principle to again take the try/catch block away from the larger method.

The other situation that I faced is since it was a different kind of code I did not think to test it.

Now that I have done both of these steps to limit my throws and to test them I can do a little something like this.

```java
public static String readTextFromFile(File file) {
   try {
       return new String(Files.readAllBytes(file.toPath()), StandardCharsets.UTF_8);
   } catch (IOException e) {
       throw new RuntimeException(e);
   }
}
```
Above is a method that I made smaller to remove the try/catch block from a larger method. And I made it public static to test more easily.

Here is the test.

```java
@Test
public void readBytesFromFileIOExceptionTest() {
   File nonExistentFile = new File("does_not_exist.tmp");
   Exception exception = assertThrows(RuntimeException.class, () -> FileHandler.readTextFromFile(nonExistentFile));
   assertTrue(exception.getCause() instanceof IOException);
}
```

Now that wasn’t so bad was it?

Now I can move through the rest of my code to limit these cases and to test more thoroughly.

Best,

Merl
