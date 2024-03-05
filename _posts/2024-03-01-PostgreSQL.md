---
title:  "PostgreSQL"
mathjax: true
layout: post
categories: media
---


I am beginning on a new database. The trouble is I cannot see it directly. Downloading the program I can create a new table and add to it, sadly I can’t see it unless I say in the terminal I want to see it.

That’s ok. I can go through this slowly. Let me show you the simple moves I have made to move forward.

Creating the table is straight forward. I have to use `CREATE TABLE` then mention the name of the table and parenthesis. Then I have to place the name of the variable, the type and a comma. So on and so forth until your title section of your table is complete.


```postgresql
CREATE TABLE table1 (
   game_id int,
   board_size VARCHAR(6),
   moves VARCHAR(100),
   player_1 VARCHAR(50),
   player_2 VARCHAR(50))
;
```

Next in order to add information in, I have to say `INSERT INTO ` then the name of the table followed by the list of variable titles you want to include. Next you must say `VALUES` followed by the values you want to add in respective order to the variable titles you mentioned above.

Like so:

```postgresql


INSERT INTO table1 (game_id, board_size, moves, player_1, player_2)
VALUES (17, ':4x4', '[1 2 3 4 5 15 6 12 7 8 13 16]', '{:kind :ai, :token "O", :difficulty :medium}', '{:kind :human, :token "X"}'  );
```
The wonderful thing, I hope to be true, is I can just add my maps by their strings and retain all of the data I had previously. Now the trick is going to be if I can retrieve the data exactly and make it work with my program.

That is always the challenge.

Best,

Merl
