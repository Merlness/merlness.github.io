---
title:  "Different Forms"
mathjax: true
layout: post
categories: media
---
Again I have been working on the guessing game for some time.

This button has been moderately challenging.

I say this because on the surface it is very convenient. The fact that in HTML one can just say make a button and it does immediately is nice.

The next part is making it work the way you want.

Let me show you

```java
private String generateGameResponse(String message, String randomNumber, String gameId) {
    return "<h1>Guessing Game</h1><p>" +
          //fluff
           "<form action=\"/guess\" method=\"post\">" +
           //fluff
           "<input type=\"number\" name=\"guess\" min=\"1\" max=\"99\" placeholder=\"37\">" +
           "<input type=\"hidden\" name=\"gameId\" value=\"" + gameId + "\" />"
// the interesting part is right below this
+ "<button type=\"submit\" name=\"newGame\" value=\"Submit\">New Game</button>"
+"</form></br></p>";
}
```

Now, creating the button was straightforward. There are many places that tell you how to do this.

The problem that I was having is it would always produce the same result.

In my request body I would `Submit` every time.   

`guess=20&gameId=25&newGame=Submit`


Whenever I would place a guess I would always get submit, and whenever I would press submit, I would always get submit.


When you find a solution, the earlier attempts always seem foolish.

“Duh, why didn’t I try that first?”

The other  interesting thing I have learned is just because it works now does not mean that is the solution. I will most likely have to make changes later.

The current solution is to place the submit button in its own post request.

The reason why it kept sending me the submit button was because it was in the same post that kept being sent.

If it was in a different post, it would only send the body message if pressed.

```java
private String generateGameResponse(String message, String randomNumber, String gameId) {
    return "<h1>Guessing Game</h1><p>" +
          //fluff
           "<form action=\"/guess\" method=\"post\">" +
//fluff
           "<input type=\"number\" name=\"guess\" min=\"1\" max=\"99\" placeholder=\"37\">" +
           "<input type=\"hidden\" name=\"gameId\" value=\"" + gameId + "\" />" +
           "</form>" +
   //interesting part below, a new post        
"<form action=\"/guess\" method=\"post\">" +
           "<input type=\"hidden\" name=\"gameId\" value=\"" + gameId + "\" />" +
           "<button type=\"submit\" name=\"newGame\" value=\"true\">New Game</button>" +
           "</form></br></p>";
}
```

Now if I just guess my request body looks like:
`guess=20&gameId=25`

And if I click the submit button my message looks like:
`gameId=25&newGame=true`

Lastly, it is a new game button so I want to show the logic quickly.

```java
boolean newGame = Boolean.parseBoolean(gameData.getOrDefault("newGame", "false"));


if (game == null || game.isGameOver() || newGame) {
   gameId = UUID.randomUUID().toString();
   game = new NumberGame();
   games.put(gameId, game);
}
```

`newGame` is by default false unless triggered by the request body.

Next I had this nifty if statement to help make a new game.
Before it was useful when the server began and game was null, or when the game was over this helped create a new game with a new ID.

Along with placing the game and Id in a hashmap to store the information.

Now I just placed the boolean `newGame` in order to trigger that action with the click of a button!

Best,

Merl
