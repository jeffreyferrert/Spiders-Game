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
    return Math.floor((Math.random() * (max - min) + min) / 20) * 20;
}
 
export function getDistance(xpos1, ypos1, xpos2, ypos2) {
    let result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2));
    return result;
}

export function getHorizontalDistance(xpos1, ypos1, xpos2, ypos2) {
    if (ypos1 === ypos2) {
        if (xpos1 < xpos2) {
        return xpos2 - xpos1;
            
        } else if (xpos1 >= xpos2){
        return xpos2 - xpos1;
        }
    }
}

export function getRandom(max) {
    return Math.floor(Math.random() * max);
  }