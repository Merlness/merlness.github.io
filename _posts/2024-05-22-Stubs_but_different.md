---
title: "Stubs but different"
mathjax: true
layout: post
categories: media
---


I have been hearing recently from my mentor that I need to limit Stubs in my testsing as much as possible.

The powerful thing about stubs is that they can allow us to test different portions of the test without running parts of
the code you don't want to run.
This is of course useful at the higher functionality of a program where you don't want to run the whole program you just
want to know certain functions do what they are supposed to.

Stubs allow us to do this but at a cost of actually running. This means if there is an error on the number of
parameters, or an error in general, Stubs might overlook this and produce a passing test.
And now that this test is passing, your program might break, and now you don't know where to begin.

I wanted to test a function that draws a white square using the quil library.

        (it "makes a white  square"
            (let [fill-args (atom [])
                    rect-args (atom [])]
                (with-redefs [q/fill (fn [& args] (swap! fill-args conj args))
                      q/rect (fn [& args] (swap! rect-args conj args))]
                (sut/draw-square 3 "M" 1 2)
                (should= '(255 255 255) (flatten @fill-args))
                (should= [[(* 1 (/ 300 3)) (* 2 (/ (- 400 50) 3)) (/ 300 3) (/ (- 400 50) 3)]] @rect-args))))

In this test, I used with-redefs to redefine the q/fill and q/rect functions to capture their arguments. I thought this approach would eliminate the need for stubs. However, I realized that I was still essentially stubbing these functions by manually capturing their arguments.
Here's a similar test using stubs directly:

    (it "makes a white square - stubs"
      (with-redefs [q/fill (stub :fill)
                    q/rect (stub :rect)]
        (sut/draw-square 3 "M" 1 2)
        (should-have-invoked :fill {:with [[255 255 255]]})
        #_(should= [[(* 1 (/ 300 3)) (* 2 (/ (- 400 50) 3)) (/ 300 3) (/ (- 400 50) 3)]] @rect-args)))


In this test, I used the stub function to mock q/fill and q/rect, then checked if they were called with the correct arguments.

Despite my efforts to avoid stubs, I realized that my approach with with-redefs was just another form of stubbing. Both methods involve intercepting function calls to check behavior, but the first approach required more manual setup.

So is life futile, and fate inevitable? Maybe, but I don't think so. 

Stubs can be useful, it’s essential to recognize when we are simply replacing one form of stubbing with another. Moving forward, I'll focus on writing more effective tests that minimize stubbing and better reflect the actual behavior of my code.

Testing is a continuous learning process, and each challenge brings new insights

Best, 

Merl
