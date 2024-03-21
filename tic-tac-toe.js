/* Get all of the cells of the board */
const cells = document.querySelectorAll(".cell");

/* Get the restart button element */
const restartBtn = document.getElementById("restart_button");

/* End screen pop up: */
const popup = document.querySelector(".end_screen");
const endMessage = document.getElementById("message");
const newGameBtn = document.getElementById("new_game");





/* Create 2 variables to hold the current player
   and the current game state */
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];


/* Add a click event listener to each cell that
   calls the handleClick function */
cells.forEach(cell => cell.addEventListener("click", handleClick));



/* HandleClick:
 * This is for when we click a cell, so that when a cell
 * is clicked, the text either turns to "X" or "O"
 * depending on the current player 
 */
function handleClick(event)
{
        const cell = event.target;
        const cellIndex = Array.from(cells).indexOf(cell);

        if (gameState[cellIndex] !== '')
        {
                return;
        }

        /* Add the "X" or "O" to the cell depending
           on the current player */
        gameState[cellIndex] = currentPlayer;
        cell.innerText = currentPlayer;

        /* player is just a temp var to store the current player,
         * so if the current player at this stage wins, I can print it out
         * This is because by the time I call checkWin function, I would
         * have already changed the current player 
         */
        player = currentPlayer;
        
        /* Change the current player */
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updatePlayerStatus();
        
        /* Check the current state of the game: */
        checkWin();
}





/***********    PLAYER STATUS:   ************/
/* Display at the top who the current player is */
function updatePlayerStatus() 
{
        const playerStatus = document.querySelector(".player_status");
        playerStatus.innerText = "Player " + currentPlayer + "'s turn";
}







/***********   RESTART GAME:     ***************/

/* Add a click event listener to the restart button
   and then turn all the cells text to empty string: */
restartBtn.addEventListener("click", () => 
{
        cells.forEach(cell => 
        {
                cell.innerText = "";
        });

        /* Reset the game state: */
        gameState = ["", "", "", "", "", "", "", "", ""];
});








/*************     END GAME:     ***************/

/* Checks if the game's current state is a win or a draw: */
const checkWin = () =>
{
        var win = false;

        const winningCombinations = 
        [
                /* Horizontal win: */
                [0, 1, 2],
                [3, 4, 5], 
                [6, 7, 8],

                /* Vertical win: */
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],

                /* Diagonal win: */
                [0, 4, 8],
                [2, 4, 6],
        ];

      
        /* Win conditions */
        for (let i = 0; i < winningCombinations.length; i++)
        {
                const [a, b, c] = winningCombinations[i];
                if (cells[a].innerHTML &&
                    cells[a].innerHTML === cells[b].innerHTML &&
                    cells[a].innerHTML === cells[c].innerHTML)
                {
                        /* End screen Popup: */
                        popup.classList.remove("hide");
                        endMessage.innerHTML = "'" + player + "'" + " Wins";
                        win = true;
                }
        }
      
        /* Draw condition: */
        if (!gameState.includes("") && win != true)
        {
                /* End screen Popup: */
                popup.classList.remove("hide");
                endMessage.innerHTML = "It's a Draw";
        }
}







/****************    NEW GAME    *****************/
newGameBtn.addEventListener("click", () =>
{     
        /* Reset the game board: */
        cells.forEach((cell) => 
        {
                cell.innerHTML = "";

        })

        /* Disable end screen popup */
        popup.classList.add("hide");

        /* Reset the game state: */
        gameState = ["", "", "", "", "", "", "", "", ""];
});
      
                        

