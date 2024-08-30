---
title:  "Complicated Tests"
mathjax: true
layout: post
categories: media
---

Recently I have been working on fixing a few challenging bugs. 
They have been challenging because they only exist in very specific conditions. 

This makes it challenging to test!

How do you test this when normally you just make one component and test that. But now you need to make 2 different components. 
The reason why you need 2 components is because of how they interact with each other that produces this bug. 

The wise thing I learned was that instead of rendering these 2 components, which would never happen in production. 

You should go to a higher level where these 2 components are made "naturally" and in production and then test there. 

That last sentence was what helped me move forward and actually create meaningful tests. 

## Tests

I did come across a test that tested me as a person. 

I wrote this and I am ashamed. See a test should ideally be small and only test a few things. So I need to split it up. 

I also had another problem that was mainly solved once I did split this up. 

The problem was that clicking on Sam should have had specific events happening. I should not have selected Frodo, however this test could not pass.  

Again the problem was it was doing too much and the other problem is that I had the click inside the let statement. 


```clojure

      (it "displays new data when one tag and one member are selected"
        (let [sam-progress (select (str "#-filtrate-" (:id @sam)))]
          (should-select (str "#-filtrate-" (:id @frodo)))
          (click! (str "#-filter-" (:id @hobbit)))
          (click! (str "#-filter-" (:id @sam)))
          (should-not-select (str "#-filtrate-" (:id @frodo)))
          (should= "2.01/2.01" (text sam-progress ".-points-fraction"))
          (should= "(1/1)" (text sam-progress ".-stories-fraction"))
          (should= "100%" (o-get (style sam-progress ".-progress-bar") "width"))))
```

If I split them up and move the clicks above the let statement now the objects will change and I can test the assertions!

```clojure
  (it "only shows currently selected member"
        (should-select (str "#-filtrate-" (:id @frodo)))
        (click! (str "#-filter-" (:id @hobbit)))
        (click! (str "#-filter-" (:id @sam)))
        (should-not-select (str "#-filtrate-" (:id @frodo))))

      (it "displays new data when one tag and one member are selected"
        (click! (str "#-filter-" (:id @hobbit)))
        (click! (str "#-filter-" (:id @sam)))
        (let [sam-progress (select (str "#-filtrate-" (:id @sam)))]
          (should= "2.01/2.01" (text sam-progress ".-points-fraction"))
          (should= "(1/1)" (text sam-progress ".-stories-fraction"))
          (should= "100%" (o-get (style sam-progress ".-progress-bar") "width"))))
```

I should have known this but even now I still make rookie mistakes. 

Over time hopefully these occurrences start dwindling. 

Best, 

Merl
