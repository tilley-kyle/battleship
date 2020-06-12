# Operation BattleShip

 ## BattleShip: The Board Game... Onlinified

> People who like games combining luck and strategy will get a kick out of this one.

> BattleShip: The Board Game... Onlinified is a strategy game pitting two players against eachother as they vie
>             for total control of the sea. They'll place their fleets spread across the board in a way that
>             will make it difficult for the other player to find. Taking turns they will guess a grid location
>             correlating to their apponents board hoping to strike a ship, and eventually sink their fleet before
>             their own get sunk.

> The problem that BattleShip: The Board Game... Onlinified is tackling is properly paying homage to a great game
>             thrown to the wayside with modern and more complicated games of today. Many don't realize Battleship
>             originated as the original Ender's Game during the conflicts of the early 20th century.
>             Unsuspecting officers in training were given the board game to practice ordering fleets movements and
>             attacks on the enemy. Officers in training were encouraged to rutheless and were so, not realizing they
>             were commanding real naval conflicts miles away. Since then Battleship has faded into obscurity, especially
>             following WWII when the aircraft carrier replaced the majestic battleship, patrolling the seas.

> We here at KATilleyTech think that notion is unacceptable. We will bring back Battleship and modernize it into
>             BattleShip: The Board Game... Onlinified using the full power of JavaScript and its compatible
>             technologies!

> "Wow, I hope I'm not actually commanding a real fleet here! #nosurvivors" Said one happy customer after winning
>             her first game. We promise this is just fun!*

> Are you ready to dominate the seas? Are you ready to command the full power of hundreds of thousands of tons of diplaced
>             water that is your fleet? Well log in Admiral, BattleShip: The Board Game... Onlinified awaits!

> ## Know Bugs
> - ~~Hits can be counted multiple times~~
> - - ~~A user can keep clicking on the same hit location and rack up their score to win~~
> - on game stage set to 'over' the radar reverts to the deployment console
> - - Should stay on the radar screen
> - - Eventually should have a pop-up to play again and reset state
> - ~~Random problem on setup that one of the players won't be able to be sent to 'player ready'~~
> - - ~~Haven't been able to replicate on command yet!!
> - - ~~One of the players states will be changed to 'ready' when all of their pieces are out but~~
> - -   ~~on clicking the 'deploy the flee' button they aren't moved to 'player ready' which~~
> - -   ~~prevents the game moving to the 'battle' stage~~
> - - Potential solve: sometimes the functoin to mark if a ship was place would put a ' : true' into
> - - the object tracking what ship has been place AS WELL as 'ship: ture'. This would result in a
> - - tally of 6 ships, not 5 which is what the checkPlayerReady function was looking for, so change
> - - === 5 to >= 5