document.addEventListener('DOMContentLoaded', function(){
    //let playerTurn = 1; 
    // let player1 = document.getElementById("player1turn");
    // let player2 = document.getElementById("player2turn");
    // let player1Name = "Player 1";
    // let player2Name = "Player 2";  
    // let settingsButton = document.getElementById("settings");
    // let resetButton = document.getElementById("resetGame");
    // let playerTurnContainer = document.getElementById("playerTurn");
    // let victory = document.getElementById("victory");
    // let victoryFlag = false;
    // let settingsEnabled = false;
    // let tiles = document.querySelectorAll(".boardTile");
    // let corners = ["a1", "a3", "b2", "c1", "c3"];

    // HTML snippets
    // let turnStatus = generateTurnStatus(player1Name, player2Name);

    // let settingsForm = generateSettingsForm(player1Name, player2Name);
    
    
    // tiles.forEach(function (currentValue, currentIndex, listObj) {
    //     currentValue.addEventListener('click', function(){
    //         if (!this.innerHTML && !victoryFlag && !settingsEnabled){
    //             if (playerTurn == 1){
    //                 this.innerHTML = '<img class="tile" src="./img/close-thick.svg" alt="It\'s an X">';
    //                 if(checkVictory(this)){
    //                     playerWins(player1Name);
    //                 } else {
    //                     playerTurnEnd(playerTurn);
    //                 }
    //             } else {
    //                 this.innerHTML = '<img class="tile" src="./img/circle-outline.svg" alt="It\'s an O">';
    //                 if(checkVictory(this)){
    //                     playerWins(player2Name);
    //                 } else {
    //                     playerTurnEnd(playerTurn);
    //                 }
    //             }
    //         }
    //         //checkRow(this);
    //         checkColumn(this);
    //     });
    // });
    statusManager.intializeStatus();
    statusManager.startGame();
    boardManager.setTiles(document.querySelectorAll(".boardTile"));
    boardManager.addTileEvents();

    // settingsButton.addEventListener("click", function(){
    //     console.log("settings clicked");
    //     if(!settingsEnabled){
    //         playerTurnContainer.innerHTML = settingsForm;
    //         settingsEnabled = true;
    //         let player1NameField = document.getElementById("player1Name");
    //         let player2NameField = document.getElementById("player2Name");
    //         let applyButton = document.getElementById("applyNames");
    //         applyButton.addEventListener("click", function(){
    //             player1Name = player1NameField.value;
    //             player2Name = player2NameField.value;
    //             playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
    //             player1 = document.getElementById("player1turn");
    //             player2 = document.getElementById("player2turn");
    //             settingsEnabled = false;
    //         });
    //     } else {
    //         playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
    //         player1 = document.getElementById("player1turn");
    //         player2 = document.getElementById("player2turn");
    //         settingsEnabled = false;
    //     }
    // });
    
    // resetButton.addEventListener("click", function(){
    //     initializeBoard(tiles);
    // });
    
    // let initializeBoard = function(tileSet){
    //     tileSet.forEach(function(currentValue, currentIndex, listObj){
    //         currentValue.innerHTML = "";
    //     });
        
    //     victoryFlag = false;
    //     settingsEnabled = false;
    //     victory.style.visibility = "hidden";
    //     victory.innerHTML = "something went wrong!";
    //     playerTurn = 1;
    //     player1.style.visibility = "visible";
    //     player2.style.visibility = "hidden";
    //     playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
    //     player1 = document.getElementById("player1turn");
    //     player2 = document.getElementById("player2turn");
    // };
    
    // let checkVictory = function(checkTile){
    //     if(checkRow(checkTile)
    //     || checkColumn(checkTile)){
    //         return true;
    //     } else if (corners.includes(checkTile.id)){
    //         if (checkDiagonals(checkTile)){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     } else {
    //         return false;
    //     }
    // }

    // let checkRow = function(checkTile){
    //     let row = checkTile.id.charAt(0);
    //     let first = document.getElementById(row + "1").innerHTML;
    //     let second = document.getElementById(row + "2").innerHTML;
    //     let third = document.getElementById(row + "3").innerHTML;
    //     if (first  == second
    //     &&  second == third){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // let checkColumn = function(checkTile){
    //     let column = checkTile.id.charAt(1);
    //     let first = document.getElementById("a" + column).innerHTML;
    //     let second =  document.getElementById("b" + column).innerHTML;
    //     let third =  document.getElementById("c" + column).innerHTML;
    //     if (first  == second
    //     &&  second == third){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // let checkDiagonals = function(checkTile){
    //     let uLeft = document.getElementById("a1").innerHTML;
    //     let uRight = document.getElementById("a3").innerHTML;
    //     let lLeft = document.getElementById("c1").innerHTML;
    //     let lRight = document.getElementById("c3").innerHTML;
    //     let center = document.getElementById("b2").innerHTML;

    //     if(((uLeft == center && center == lRight) && center)
    //     || ((lLeft == center && center == uRight) && center)){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // let playerWins = function(player){
    //     victory.innerHTML = player + " wins!";
    //     victory.style.visibility = "visible";
    //     victoryFlag = true
    // }

    // let playerTurnEnd = function(player){
    //     if (player == 1){
    //         playerTurn = 2;
    //         player1.style.visibility = "hidden";
    //         player2.style.visibility = "visible";
    //     } else {
    //         playerTurn = 1;
    //         player2.style.visibility = "hidden";
    //         player1.style.visibility = "visible";
    //     }
    // }


})

let generateTurnStatus = function(p1, p2){
    return `<div id="player1turn">${p1}'s turn</div>
            <div id="player2turn">${p2}'s turn</div>`
}

let generateSettingsForm = function(p1, p2){
    return `<div class="playerNameAssignment">
            <input type="text" name="${p1}" id="player1Name">
            <input type="text" name="${p2}" id="player2Name">
            </div>
            <div class="applyPlayerNames">
                <button id="applyNames">Apply Names</button>
            </div>`
}

const statusManager = (() => {
    let settingsButton;
    let resetButton;
    let playerTurnContainer;
    let playerTurn;
    let victory;
    let victoryFlag;
    let settingsEnabled;
    let player1;
    let player2;
    let player1Name = "Player 1";;
    let player2Name = "Player 2";;

    // HTML snippets
    let turnStatus;
    let settingsForm;

    const intializeStatus = function(){
        settingsButton = document.getElementById("settings");
        resetButton = document.getElementById("resetGame");
        playerTurnContainer = document.getElementById("playerTurnContainer");
        victory = document.getElementById("victory");
    }

    const startGame = function(){
        // settingsButton = document.getElementById("settings");
        // resetButton = document.getElementById("resetGame");
        // playerTurnContainer = document.getElementById("playerTurnContainer");
        // victory = document.getElementById("victory");
        victoryFlag = false;
        settingsEnabled = false;
        player1 = document.getElementById("player1turn");
        player2 = document.getElementById("player2turn");
        // player1Name = "Player 1";
        // player2Name = "Player 2";
        playerTurn = 1;

        player1.style.visibility = "visible";
        player2.style.visibility = "hidden";

        victory.style.visibility = "hidden";
        victory.innerHTML = "something went wrong!";

        turnStatus = generateTurnStatus(player1Name, player2Name);
        settingsForm = generateSettingsForm(player1Name, player2Name);

        settingsButton.addEventListener("click", toggleSettings);
        
        resetButton.addEventListener("click", function(){
            boardManager.initializeBoard();
        });
    }

    
    
    const toggleSettings = function(){
        console.log("settings clicked");
        if(!settingsEnabled){
            playerTurnContainer.innerHTML = settingsForm;
            settingsEnabled = true;
            let player1NameField = document.getElementById("player1Name");
            let player2NameField = document.getElementById("player2Name");
            let applyButton = document.getElementById("applyNames");
            applyButton.addEventListener("click", function(){
                player1Name = player1NameField.value ? player1NameField.value : player1Name;
                player2Name = player2NameField.value ? player2NameField.value : player2Name;
                playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
                player1 = document.getElementById("player1turn");
                player2 = document.getElementById("player2turn");
                styleActivePlayer();
                settingsEnabled = false;
                if(victoryFlag){
                    playerWins();
                }
            });
        } else {
            playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
            player1 = document.getElementById("player1turn");
            player2 = document.getElementById("player2turn");
            styleActivePlayer();
            settingsEnabled = false;
            if(victoryFlag){
                playerWins();
            }
        }

        
    }

    const generateTurnStatus = function(p1, p2){
        return `<div id="player1turn">${p1}'s turn</div>
                <div id="player2turn">${p2}'s turn</div>`
    }
    
    const generateSettingsForm = function(p1, p2){
        return `<div class="playerNameAssignment">
                <input type="text" name="${p1}" id="player1Name">
                <input type="text" name="${p2}" id="player2Name">
                </div>
                <div class="applyPlayerNames">
                    <button id="applyNames">Apply Names</button>
                </div>`
    }

    const takeTurn = function(){
        if (playerTurn == 1){
            playerTurn = 2;
            styleActivePlayer();
            return 1;
        } else {
            playerTurn = 1;
            styleActivePlayer();
            return 2;
        }
    }

    const styleActivePlayer = function(){
        if (playerTurn == 1){
            player1.style.visibility = "visible";
            player2.style.visibility = "hidden";
        } else {
            player2.style.visibility = "visible";
            player1.style.visibility = "hidden";
        }
    }

    const playerWins = function(){
        if (playerTurn == 1) {
            victory.innerHTML = player1Name + " wins!";
        } else {
            victory.innerHTML = player2Name + " wins!";
        }

        victory.style.visibility = "visible";
        victoryFlag = true;
    }

    const checkTurn = () => playerTurn;

    const checkVictoryFlag = () => victoryFlag;

    const checkSettingsFlag = () => settingsEnabled;
    
    return {
        //Variables
        settingsEnabled,
        player1,
        player2,
        player1Name,
        player2Name,
        //Functions
        intializeStatus,
        startGame,
        takeTurn,
        playerWins,
        checkTurn,
        checkVictoryFlag,
        checkSettingsFlag
    }
})();

const boardManager = (() => {
    let tileSet = document.querySelectorAll(".boardTile");    
    let corners = ["a1", "a3", "b2", "c1", "c3"];
    
    const setTiles = function(newTileSet){
        tileSet = newTileSet;
    }



    const initializeBoard = function(){
        tileSet.forEach(function(currentValue, currentIndex, listObj){
            currentValue.innerHTML = "";
        });
        
        statusManager.startGame();
        // victoryFlag = false;
        // settingsEnabled = false;
        // playerTurn = 1;

        // playerTurnContainer.innerHTML = generateTurnStatus(player1Name, player2Name);
        // player1 = document.getElementById("player1turn");
        // player2 = document.getElementById("player2turn");
    };
    
    const addTileEvents = function(){
        tileSet.forEach(function (currentValue, currentIndex, listObj) {
            currentValue.addEventListener('click', function(){
                if (!this.innerHTML && !statusManager.checkVictoryFlag() && !statusManager.checkSettingsFlag()){
                    //statusManager.takeTurn();
                    if (statusManager.checkTurn() == 1){
                        this.innerHTML = '<img class="tile" src="./img/close-thick.svg" alt="It\'s an X">';
                        if(checkVictory(this)){
                            statusManager.playerWins();
                        } else {
                            statusManager.takeTurn();
                        }
                    } else {
                        this.innerHTML = '<img class="tile" src="./img/circle-outline.svg" alt="It\'s an O">';
                        if(checkVictory(this)){
                            statusManager.playerWins();
                        } else {
                            statusManager.takeTurn();
                        }
                    }
                }
            });
        });
    }

    const checkRow = function(checkTile){
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

    const checkColumn = function(checkTile){
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

    const checkDiagonals = function(checkTile){
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

    const checkVictory = function(checkTile){
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

    return {
        setTiles,
        addTileEvents,
        initializeBoard,
        checkVictory}
})();