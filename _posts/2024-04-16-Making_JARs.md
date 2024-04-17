---
title:  "Making JARs"
mathjax: true
layout: post
categories: media
---

Making JARs is useful because they can store things. Yes that was a very general statement made on purpose.

A Java Archive (JAR) file is useful for multiple reasons.

One is it allows developers to bundle many classes, and data into one single file to send out to others.

Two it allows for a compressed version of your code which can make it easier/faster to transfer to someone else.

There are more reasons but those 2 are the most important to me at this moment.

Now to the steps of making a JAR file.

## Step 1: Compile

To compile Java code, I used the javac command.

```java
javac -cp src -d out src/MerlsServer/Main.java
```
`javac` is the command that calls the Java compiler.

`-cp` src sets the classpath to the src directory. This tells the compiler where to find any classes that are used as dependencies during compilation.

`-d` out specifies the directory where the compiled .class files should be output. If this directory does not exist, javac will create it.

`src/MerlsServer/Main.java` is the path to the Java file we want to compile. This path is relative to the classpath.

## Step 2 Making the JAR File

```java
jar cfm MyHTTPServer.jar src/META-INF/MANIFEST.MF -C out/ .
```
`jar` is the command that invokes the JAR utility
`cfm` are options passed to the jar command:
`c` is for “creating” a new JAR
`f` is for the output to a “file”
`m` says that a manifest file will be included. The manifest file (src/META-INF/MANIFEST.MF)

`MyHTTPServer.jar` is the name of the JAR file we are creating

`-C out/ .` tells the jar tool to change to the out/ directory and include all files and directories from `.`

## Running the JAR File

```java
java -jar MyHTTPServer.jar -p 8080 -r .
```

`java` is the command to run Java

`-jar` MyHTTPServer.jar tells Java that we are running an application packaged as a JAR file

-p 8080 and -r . are arguments

For example, `-p 8080` tells the server it should listen on port 8080, and `-r .` begins the root directory to begin at that location.

Now you can compile, create, and run a JAR file too!

Best,

Merl
