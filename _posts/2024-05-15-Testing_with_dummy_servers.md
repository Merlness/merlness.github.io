---
title:  "Testing With Dummy Servers"
mathjax: true
layout: post
categories: media
---

Testing my code is always a crucial part of my development 
process. Today, I wanted to share how using protocols and 
dummy servers helped me test my server setup more 
effectively. I'll break down the process and the insights I 
gained along the way.


I implemented a dummy server to test my HTTP server 
setup, and here it is:

```clojure
(defprotocol IServer 
             (start [_]))

(deftype FakeServer [started? port handler]
         IServer
         (start [_] (reset! started? true)))
```

The IServer protocol defines a single method start, and 
FakeServer is a simple implementation of this protocol. 
The FakeServer keeps track of whether it has been started and
stores the port and handler.

Then I wanted to check if my HTTP server worked as I expected. 
I created tests to see if the server was initialized correctly
and if it has the correct handler. 


So I checked that my HTTP server initializes with different 
ports and that it recognizes its type:

```clojure
(it "tests MyHTTPServer"
      (let [server-1 (sut/->MyHTTPServer 8080 (TheHandler.))
            server-2 (sut/->MyHTTPServer 9000 (TheHandler.))]
        (should= 8080 (.getPort server-1))
        (should= 9000 (.getPort server-2))
        (should-be-a MyHTTPServer server-1)))
```

I had no idea I could check for a type, until now.  I used 
`should-be-a` to check that the servers were instances of MyHTTPServer.
Now i can always have confidence that `->MyHTTPServer` is fully tested. 


## Dummy Server 

The next step was to ensure that my server starts correctly. 
I used a dummy server (FakeServer) for this purpose:

```clojure
(it "begins a dummy server"
      (let [server (atom nil)
            started? (atom false)]
        (with-redefs [sut/->MyHTTPServer (fn [port handler]
                                           (reset! server (->FakeServer started? port handler)))]
          (sut/-main)
          (should= 8080 (.-port @server))
          (should @started?)
          (should-be-a TheHandler (.-handler @server)))))
```

In this test, I redefined sut/->MyHTTPServer to create an 
instance of FakeServer instead of the real server. 
This allowed me to test the server starting process without
needing to start an actual HTTP server. I made sure 
the server was initialized with the correct port and handler, 
and that it was started correctly.

## Code

Here’s the code that I was testing:

```clojure
(deftype TheHandler []
  IRequestHandler
  (handle [_this request]
    (handler/handle-tictactoe request))
  (canHandle [_this request]
    (= "/tictactoe" (.getPath request))))

(defn ->MyHTTPServer [^Integer port ^IRequestHandler handler]
  (MyHTTPServer. port handler))

(defn start-server []
  (let [port 8080
        tic-tac-toe-handler (TheHandler.)
        server (->MyHTTPServer port tic-tac-toe-handler)]
    (.start server)))

(defn -main [& args]
  (start-server))
```

The TheHandler type implements the IRequestHandler protocol 
and handles requests for the "/tictactoe" path. 
The ->MyHTTPServer function creates a new server instance 
with the specified port and handler.
The start-server function initializes and starts the server.

Using  dummy servers made it easier to isolate and test my server code. 
I have had the ability to test my lower level code, 
but I have always had fear testing my higher level code. 

Which is silly because the higher level the code the more it's functionality should be tested. 
And at least for now, I have all of my lines tested.

Testing is an art, and finding the right tools and techniques can make all the difference.


Best, 

Merl
