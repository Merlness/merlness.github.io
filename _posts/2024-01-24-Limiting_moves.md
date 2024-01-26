Limiting my moves

I have to make my program faster.

I’m sure that’s something you have said before as well. The way that I am going to accomplish it today is to limit the number of moves minimax is able to go into the future.

See initially, minimax searched through every possible move. This was not a problem when the board was 3x3. When the board went to 4x4 however, things changed.
It took about 8 seconds for minimax to find the first move for a 3x3 board, I let the program run for the whole weekend to find the first move for a 4x4 board. It told me there was insufficient data for a meaningful answer. Ok it didn’t say that but, there was no answer.

Increasing the board slightly exponentially changed the timing of minimax!
Now that I have a 3d board, the same issue arises. How can I fix this?

Before I had depth begin at 1 and increase by the number of moves after every move.

```clojure
(defn value [game-board depth]
 (cond
   (board/x-wins game-board) (/ 12 depth)
   (board/o-wins game-board) (/ -12 depth)
   (board/tie game-board) 0))
```
I chose 12 because this quotient will most likely be a whole number, that doesn’t really matter I just like that idea. As you can see the more moves( larger depth) the closer to 0 we get. Of course we want values away from 0.

What I wanted to do now, is instead of going through every possible move to limit the number of moves my game could make. So instead of starting at 1 and moving up, we can start at an arbitrary number like 4 and go to 0. This way minimax can provide the best move within 4 moves.

This is like a monkey paw situation. Yes, this will make the program faster, but the tradeoff could be that a good move was placed rather than the ideal move.

For performance I’m sure many of us will make that trade.  
I won’t go over all of the functions I changed but I will show these:

```clojure

(def default-depth 4)


(defn value [game-board depth]
 (cond
   (board/x-wins game-board) depth
   (board/o-wins game-board) (- depth)
   :else 0))
                              ;^here




(defn best-move [maximizing? game-board depth [best-value best-action] action]
 (let [[compare evaluate token] (if maximizing?
                                  [> minimize "X"]
                                  [< maximize "O"])
       new-game-board (ui/place-xo game-board action token)
       value (if (zero? depth)
			;^here


               (value new-game-board depth)
               (first (evaluate new-game-board (dec depth))))]


                               ;and finally here ^
   (if (compare value best-value)
     [value action]
     [best-value best-action])))

I changed the conditional of `value`. Now since we are starting from a higher depth and going lower over time we can just return depth itself, and 0 if there is no win or loss.

I had to add an if statement to make sure nothing funny happens when depth is smaller than 0. And finally the most obvious change is that, before my refactoring, that `dec depth` was `inc depth`. This was the foundation that allowed me to refactor.

Now my game can go fast.

Best,

Merl
