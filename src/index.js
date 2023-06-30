import GameView from "../src/scripts/game-view";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('board-canvas');
    const ctx = canvas.getContext("2d");

    const gameview = new GameView()
    gameview.draw(ctx);

});

    // console.log(obstacles);
    // console.log(obstacles.obstacles[0].x);
    // console.log(obstacles.obstacles[0].y);
    // console.log(player.x);
    // console.log(player.y);

    // let xpos1 = obstacles.obstacles[0].x;
    // let ypos1 = obstacles.obstacles[0].y;
    // let xpos2 = player.x;
    // let ypos2 = player.y;

    // let dist = helper_functions.getDistance(xpos1, ypos1, xpos2, ypos2);
    // // console.log(dist);
    // if (dist < 30) obstacles.obstacles[0].color = "red"