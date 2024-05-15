---
title:  "Testing in 2 Languages"
mathjax: true
layout: post
categories: media
---


I will try my best to split up the ideas I learned today for today and tomorrow’s blog. Tomorrow I will go over the more complicated test today I wanted to show the integration and how to create a small abstraction to help test 2 languages at the same time.


In general, using a Java Library into my Clojure code was interesting at first but once you get the ball rolling … it rolls.


First let me begin by stating how to use Java into Clojure

```clojure 
;(.callFunction object param1 param2 ...) 
;(Constructor.) `
;(.-property object) 
```

If the `.` goes before the name, it is a function call. 

If the `.` goes after the name it is a constructor. 

Finally, and the one that blew me away was `.-` can let you get the property of a class in Java. 

I know syntax isn’t that impressive but the ability to use Java so easily in clojure was a pleasant revelation. 

Next was the challenging part, how to test my whole system. It is easy to test the lower level functions, it is an art to test the higher level ones. 

Below is what I want to focus on for this blog. 

```clojure
(deftype TheHandler []
 IRequestHandler
 (handle [_this request]
   (handler/handle-tictactoe request))
 (canHandle [_this request]
   (= "/tictactoe" (.getPath request))))


(defn ->MyHTTPServer [^Integer port ^IRequestHandler handler]
 (MyHTTPServer. port handler))

```

I created `->MyHTTPServer` as a way to abstract the function in order to test it better, since I couldn’t stub `MyHTTPServer.`.

Integer and IRequest Handler are the types referring to the parameters like in Java. This will be important soon.

Creating that “abstract” function allowed me to isolate my server and test it. Although I could not stub it, testing the function is superior anyway because stubbing can rot just like code can. But if I have good tests focused on the calling of my function, then my tests will not rot.

```clojure
(it "tests MyHTTPServer"
 (let [server-1 (sut/->MyHTTPServer 8080 (TheHandler.))
       server-2 (sut/->MyHTTPServer 9000 (TheHandler.))]
   (should= 8080 (.getPort server-1))
   (should= 9000 (.getPort server-2))
   (should-be-a MyHTTPServer server-1)))
```

This is pretty straight forward, I created 2 servers with different ports and tested their port numbers. The interesting thing, is this test I have never used before.

Remember I mentioned that the types would be important? My first time using `should-be-a` to specify that my server should be a type `MyHTTPServer`. This is small but this is powerful.

Like I mentioned before, had I stubbed out ~MyHTTPServer` had anything gone wrong, or somehow my function changed the stub would not have cared and my tests would have passed.

Now I have the security that if for some reason my function changes to a different type of server, my tests will fail and that will alert me to the changes.

I suppose 2 points were made, Java in Clojure is straightforward, and try not to stub your tests.


Best,

Merl
