export function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
export function getDistance(xpos1, ypos1, xpos2, ypos2) {
    let result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2));
    return result;
}