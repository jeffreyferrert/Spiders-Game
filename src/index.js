import GameView from "../src/scripts/game-view";
import StartGame from "./scripts/startgame";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('board-canvas');
    const ctx = canvas.getContext("2d");

    const startgame = new StartGame();
    startgame.draw(ctx);

    window.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            const gameview = new GameView()
            gameview.draw(ctx);
        }
    }, true);


    
});