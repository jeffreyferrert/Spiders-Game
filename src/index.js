import GameView from "../src/scripts/game-view";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('board-canvas');
    const ctx = canvas.getContext("2d");

    const gameview = new GameView()
    gameview.draw(ctx);

});