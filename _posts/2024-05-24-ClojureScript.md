---
title: "ClojureScript"
mathjax: true
layout: post
categories: media
---

I have had the wonderful task of using ClojureScript to connect to the web eventually.

Currently I just want to connect it to a local host. I was able to follow in the footsteps of the giants before me and I
found a great sample project to begin.

https://github.com/mdwhatcott/cljs-sample-project

There were a few nuances. Instead of using Leiningen I converted everything to deps.edn.
Along with this I made sure all the dependencies were up to date.

Next I had to go in and change the output location and name in the clj.edn file.

    :development {  :cache-analysis true
                    :optimizations  :none
                    :output-dir     "resources/public/cljs"
                    :output-to      "resources/public/cljs/ttt_merlness_dev.js"
                    :pretty-print   true
                    :source-map     true
                    ;:sources       ["spec" "src"]
                    :sources        ["spec" "src/cljs"]
                    :specs          true                                   ;; Run speclj specs after compile
                    :verbose        false
                    :watch-fn       c3kit.scaffold.cljs/on-dev-compiled    ;; Callback to run speclj specs after each compile when in auto mode
                    }

I had to make sure I called the right rile everywhere it was called. 

Now my main changed to this:

    (defn ^:export main []
        (println "Hello, from main!")
        (let [app (js/document.getElementById "ttt_merlness_dev")]
            (js-invoke js/console "log" app)
            (rdom/render [components/hello-world] app)))

Of course now this looks easy once you know where to gom and change what you need to. 
But when you are going through this process it takes up a lot of research, time, and trial and error. 

Now I could finally go into my index.html file and add the changes to make this project sing. 


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/3.13.1/minified.js" type="text/javascript"></script>
    <script src="./cljs/goog/base.js" type="text/javascript"></script>
    <link rel="stylesheet" href="styles.css">

    <div id="ttt_merlness_dev"></div>
    <script src="./cljs/ttt_merlness_dev.js" type="text/javascript"></script>
    <script type="text/javascript">
        goog.require("sample_project.core")
    </script>
    
    <script>
        sample_project.core.main()
    </script>
</head>
<body>

</body>
</html>
```

The parts that were the most challenging was the HTML. 

One, originally I had no idea I could call main here. This is new information and super powerful!

Also, I did call main, but I had now idea I had to require it in the line above. This was the largest challenge for me. 

Which in hindsight is comical because it is only one simple line of code. It just goes to show you, one line of code makes all the difference.  

Now it all connects and I can see my component in my local host. 

There is still so much more to do, but at least I connected it. 

Best, 

Merl
