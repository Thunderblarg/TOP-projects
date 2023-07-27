document.addEventListener('DOMContentLoaded', function(){
    let playerTurn = 1; 
    let player1 = document.getElementById("player1turn");
    let player2 = document.getElementById("player2turn");  
    let settingsButton = document.getElementById("settings");
    let resetButton = document.getElementById("resetGame");
    let victory = document.getElementById("victory");
    let victoryFlag = false;
    let corners = ["a1", "a3", "b2", "c1", "c3"];
    let tiles = document.querySelectorAll(".boardTile");
    
    
    tiles.forEach(function (currentValue, currentIndex, listObj) {
        currentValue.addEventListener('click', function(){
            if (!this.innerHTML && !victoryFlag){
                if (playerTurn == 1){
                    this.innerHTML = '<img class="tile" src="./img/close-thick.svg" alt="It\'s an X">';
                    if(checkVictory(this)){
                        playerWins(playerTurn);
                    } else {
                        playerTurnEnd(playerTurn);
                    }
                } else {
                    this.innerHTML = '<img class="tile" src="./img/circle-outline.svg" alt="It\'s an O">';
                    if(checkVictory(this)){
                        playerWins(playerTurn);
                    } else {
                        playerTurnEnd(playerTurn);
                    }
                }
            }
            //checkRow(this);
            checkColumn(this);
        });
    });
    
    // settingsButton.addEventListener("click", function(){
        
    // });
    
    resetButton.addEventListener("click", function(){
        initializeBoard(tiles);
    });
    
    let initializeBoard = function(tileSet){
        tileSet.forEach(function(currentValue, currentIndex, listObj){
            currentValue.innerHTML = "";
        });
        
        victoryFlag = false;
        victory.style.visibility = "hidden";
        victory.innerHTML = "something went wrong!";
        playerTurn = 1;
        player1.style.visibility = "visible";
        player2.style.visibility = "hidden";
        
    };
    
    let checkVictory = function(checkTile){
        if(checkRow(checkTile)
        || checkColumn(checkTile)){
            return true;
        } else if (corners.includes(checkTile.id)){
            if (checkDiagonals(checkTile)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    let checkRow = function(checkTile){
        let row = checkTile.id.charAt(0);
        let first = document.getElementById(row + "1").innerHTML;
        let second = document.getElementById(row + "2").innerHTML;
        let third = document.getElementById(row + "3").innerHTML;
        if (first  == second
        &&  second == third){
            return true;
        } else {
            return false;
        }
    }

    let checkColumn = function(checkTile){
        let column = checkTile.id.charAt(1);
        let first = document.getElementById("a" + column).innerHTML;
        let second =  document.getElementById("b" + column).innerHTML;
        let third =  document.getElementById("c" + column).innerHTML;
        if (first  == second
        &&  second == third){
            return true;
        } else {
            return false;
        }
    }

    let checkDiagonals = function(checkTile){
        let uLeft = document.getElementById("a1").innerHTML;
        let uRight = document.getElementById("a3").innerHTML;
        let lLeft = document.getElementById("c1").innerHTML;
        let lRight = document.getElementById("c3").innerHTML;
        let center = document.getElementById("b2").innerHTML;

        if(((uLeft == center && center == lRight) && center)
        || ((lLeft == center && center == uRight) && center)){
            return true;
        } else {
            return false;
        }
    }

    let playerWins = function(player){
        victory.innerHTML = "Player " + player + "wins!";
        victory.style.visibility = "visible";
        victoryFlag = true
    }

    let playerTurnEnd = function(player){
        if (player == 1){
            playerTurn = 2;
            player1.style.visibility = "hidden";
            player2.style.visibility = "visible";
        } else {
            playerTurn = 1;
            player2.style.visibility = "hidden";
            player1.style.visibility = "visible";
        }
    }

    let openSettings = function(){

    }
})

