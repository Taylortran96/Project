let playBoard = document.querySelector (".play-board");
let scoreElement = document.querySelector (".score");
let highScoreElement = document.querySelector (".high-score");
let controls = document.querySelector (".controls i");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody=[];
let velocityX = 0, velocityY= 0;
let gameOver = false;
let setIntervalId;
let score = 0;


// Record high score fromt the local storage
let highScore = localStorage.getItem ('high-score') || 0;


let changeFoodPosition = () =>{
    // Passing a random 0 - 30 value of food position
    foodX = Math.floor (Math.random() * 30) + 1;
    foodY = Math.floor (Math.random() * 30) + 1;
} 

let handleGameOver = () => {
    clearInterval(setIntervalId);
    alert ("Game Over! Press Ok to Replay")
    location.reload();
} 
let changeDirection = (e) =>{
    // Change velocity value based on key press
    if(e.key === "ArrowUp" && velocityY != 1)  {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft"  && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if (e.key === "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    } 
}

controls.forEach(key => {key.addEventListener ("click", () => changeDirection({key: key.dataset.key}))
    // Calling changeDirection on each key click and passing key.dataset value as an object
});

const initGame = () => {
    if (gameOver) return handleGameOver()
    let htmlMarkup = `<div class ="food" style ="grid-area: ${foodY}/${foodX} "> </div>`;

    if (snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.fush([foodX,foodY]); //Pushing food position to snake body array
        score++; //Increment score by 1
        
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem ("high-score",highScore);
        scoreElement.innerText = ` Score: ${score}`;
        highScoreElement.innerText = `High-Score: ${highScore}`;
    }

    for(let i = snakeBody.length-1; i > 0; i-- ){
        // Shifting forward the values of elements in the snake body by one
        snakeBody[i]= snakeBody[i-1]
    }

    snakeBody[0] = [snakeX,snakeY]; //Setting first element of snake body to current snake position

    // Update the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Check if the snake's head is out of the wall, if so setting gameOVer is true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++){
        // Adding a div for each part of the snake's body
        htmlMarkup += `<div class ="head" style ="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]} " > </div>`;
        
        // Check if the snake head hit the body, if so set GameOver is True 
        if (i != 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true
        }
    }

    
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 125)
document.addEventListener ("keydown", changeDirection)