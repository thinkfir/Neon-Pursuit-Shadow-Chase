let player, enemy, bullet, aim, enemy2, enemy3,enemy1fill,enemy2fill,enemy3fill,enemy1stroke,enemy2stroke,enemy3stroke,pspeed,speed1,speed2,speed3,s,s2,s3;
let lives = 3;
let game = 1;
let score = 0;

    pspeed = 10;
    speed1 = 2;
    speed2 = 2;
    speed3 = 2;
    s = 0;
    s2 = 0;
    s3 = 0;
function setup() {
    alert("start?");
    createCanvas(windowWidth, windowHeight);
    enemy1fill = color(255,0,0);
    enemy2fill = color(255,0,255);
    enemy3fill = color(255,255,0);
    enemy1stroke = color('orange');
    enemy2stroke = color('orange');
    enemy3stroke = color('orange');

    player = {
        x:500,
        y:400,
        w:50, 
        h:50,
        speed:pspeed
    };
    enemy = {
        x:0,
        y:0,
        w:50, 
        h:50,
        speed:speed1
    };
    enemy2 = {
        x:window.width - 300,
        y:window.height - 300,
        w:50, 
        h:50,
        speed:speed2
    };
    enemy3 = {
        x:window.width - 500,
        y:window.height - 500,
        w:50, 
        h:50,
        speed:speed3
    };
    bullet = {
        x: -10,
        y: -10,
        w: 10,
        h: 10,
        speedx: 0,
        speedy: 0
    };
    enemyBullet1 = {
        x: -15,
        y: -15,
        w: 5,
        h: 5,
        speedx: 0,
        speedy: 0
    };
    enemyBullet2 = {
        x: -20,
        y: -20,
        w: 5,
        h: 5,
        speedx: 0,
        speedy: 0
    };
    enemyBullet3 = {
        x: -25,
        y: -25,
        w: 5,
        h: 5,
        speedx: 0,
        speedy: 0
    };


}

function createEntities(){
    background(0);
    fill(0,0,255);
    strokeWeight(4);
    stroke('skyblue');
    ellipse(player.x, player.y, player.w, player.h);
    stroke(enemy1stroke);
    fill(enemy1fill);
    ellipse(enemy.x, enemy.y, enemy.w, enemy.h);
    fill(enemy2fill);
     ellipse(enemy2.x, enemy2.y, enemy2.w, enemy2.h);
    fill(enemy3fill);
    ellipse(enemy3.x, enemy3.y, enemy3.w, enemy3.h);
    fill(255,155,0);
    stroke(0,0,0);
    ellipse(bullet.x,bullet.y,bullet.w,bullet.h);
        fill(255,0,0);      
    noFill()
    stroke('sky blue');
    strokeWeight(0.1)
triangle(enemy.x,enemy.y,enemy2.x,enemy2.y,enemy3.x,enemy3.y);
}

function draw() {

    if (score/100 <= 5 ) {
        pspeed = 12;
        if (s === 0) {
            speed1 = 3;
        } else {
            speed1 = 0;
        }
        if (s2 === 0) {
            speed2 = 3;
        } else {
            speed2 = 0;
        }
        if (s3 === 0) {
            speed3 = 2;
        } else {
            speed3 = 1;
        }
    } else if (score/100 <= 10) {
        pspeed = 11;
            if (s === 0){
                speed1 = 4;      
                }else{
                speed1 = 1.5;
                    }
                if (s2 === 0){
                    speed2 = 5;
                }else{
                    speed2 = 1;
                }
                if (s3 === 0){
                    speed3 = 4;
                }else{
                    speed3 = 1.5;
                }

    } else if (score/100 <= 15){
        pspeed = 10;
            if (s === 0){
                speed1 = 5;      
                }else{
                speed1 = 2.5;
                    }
                if (s2 === 0){
                    speed2 = 6;
                }else{
                    speed2 = 2;
                }
                if (s3 === 0){
                    speed3 = 5;
                }else{
                    speed3 = 2.5;
                }
    } else if (score/100 <= 20){
         pspeed = 9;
    if (s === 0){
        speed1 = 5.5;      
        }else{
        speed1 = 4;
            }
        if (s2 === 0){
            speed2 = 6.5;
        }else{
            speed2 = 3;
        }
        if (s3 === 0){
            speed3 = 5.5;
        }else{
            speed3 = 4;
        }
    } else if (score/100 <= 40){
        pspeed = 8;
    if (s === 0){
        speed1 = 6;      
        }else{
        speed1 = 4;
            }
        if (s2 === 0){
            speed2 = 7;
        }else{
            speed2 = 4;
        }
        if (s3 === 0){
            speed3 = 6;
        }else{
            speed3 = 4;
        }
    }else{
        pspeed = 6;
    if (s === 0){
        speed1 = 7;      
        }else{
        speed1 = 5;
            }
        if (s2 === 0){
            speed2 = 8;
        }else{
            speed2 = 4;
        }
        if (s3 === 0){
            speed3 = 6;
        }else{
            speed3 = 5;
        }
    }
    if (enemy.x != null && enemy.y != undefined){
   createEntities();
    if (player.x <= 24){
      player.x = 50;
  }else if (player.x >= window.width - 24) {
      player.x = window.width - 50;
  }else if (player.y <= 24){
      player.y = 50;
  }else if (player.y >= window.height - 24){
      player.y = window.height - 50;;
  }else{
        if (lives != 0) {
    if (keyIsDown(37)||keyIsDown(65)){ //left arrow
        player.x -= pspeed;
        score++
    }
    if (keyIsDown(39)||keyIsDown(68)){ //right arrow
        player.x += pspeed;
        score++
    }
    if (keyIsDown(40)||keyIsDown(83)){ //down arrow
        player.y += pspeed;
        score++
    }
    if (keyIsDown(38)||keyIsDown(87)){ //up Arrow
        player.y -= pspeed;
        score++
    }
    }
        textSize(35);
        stroke(255,255,255);
        strokeWeight(1);
        text("Score = " + parseInt(score/100)  + "\nLives = " + lives, 50, 50);


}


    }
if (game === 1) {
    if (enemy.x <= 30){
          enemy.x = 50;
      }else if (enemy.x >= window.width - 30) {
          enemy.x = window.width - 50;
      }else if (enemy.y <= 30){
          enemy.y = 50;
      }else if (enemy.y >= window.height - 30){
          enemy.y = window.height - 50;
      }else{
    //Enemy Behavior

            if (enemy.x < player.x) {
                 setTimeout(() => {   
                enemy.x += speed1;
                 }, 30);
            }
            if (enemy.x > player.x) {
                 setTimeout(() => {   
                enemy.x -= speed1;
                 }, 30);
            }
            if (enemy.y < player.y) {
                 setTimeout(() => {   
                enemy.y += speed1; 
                 }, 30);
            }
            if (enemy.y > player.y) {
                 setTimeout(() => {   
                enemy.y -= speed1;
                 }, 30);
            }
        }
    if (enemy2.x <= 30){
          enemy2.x = 50;
      }else if (enemy2.x >= window.width - 30) {
          enemy2.x = window.width - 50;
      }else if (enemy2.y <= 30){
          enemy.y = 50;
      }else if (enemy2.y >= window.height - 30){
          enemy2.y = window.height - 50;
      }else{
    //Enemy 2 behavior

            if (enemy2.x < player.x) {
                 setTimeout(() => {   
                enemy2.x += speed2;
                 }, 50)
            }
            if (enemy2.x > player.x) {
                 setTimeout(() => {   
                enemy2.x -= speed2;
                 }, 50);
            }
            if (enemy2.y < player.y) {
                 setTimeout(() => {   
                enemy2.y += speed2;
                 }, 50);     
            }
            if (enemy2.y > player.y) {
                 setTimeout(() => {   
                enemy2.y -= speed2;
                 }, 50);
            }

    }
    if (enemy3.x <= 1){
          enemy3.x = 5;
      }else if (enemy3.x >= window.width - 1) {
          enemy3.x = window.width - 5;
      }else if (enemy3.y <= 1){
          enemy3.y = 5;
      }else if (enemy3.y >= window.height - 1){
          enemy3.y = window.width - 5;
      }else{
    //Enemy3 Behavior

            if (enemy3.x < player.x) {
                 setTimeout(() => {   
                enemy3.x += speed3;
                 }, 25);
            }
            if (enemy3.x > player.x) {
                 setTimeout(() => {   
                enemy3.x -= speed3;
                 }, 25);
            }
            if (enemy3.y < player.y) {
                 setTimeout(() => {   
                enemy3.y += speed3;
                 }, 25);
            }
            if (enemy3.y > player.y) {
                 setTimeout(() => {   
                enemy3.y -=speed3;
                 }, 25);
            }

    }
       if (game === 1) {

    if (keyIsDown(81)||keyIsDown(32)) { // When space key is pressed
               bullet.x = player.x;
               bullet.y = player.y;
               let angle = Math.atan2(mouseY - bullet.y, mouseX - bullet.x);
               bullet.speedx = Math.cos(angle) * 6.5;  
               bullet.speedy = Math.sin(angle) * 6.5;  
           }
           if (bullet.x < 0 || bullet.x > windowWidth) {
                   bullet.speedx = -bullet.speedx; // Reverse the x direction
               }
               if (bullet.y < 0 || bullet.y > windowHeight) {
                   bullet.speedy = -bullet.speedy; // Reverse the y direction
               }
               // Update bullet position based on speed
               bullet.x += bullet.speedx;
               bullet.y += bullet.speedy;
               // Other existing code
           }
           bullet.x += bullet.speedx;
           bullet.y += bullet.speedy;
       }

    function ellipseCollision(ellipse1, ellipse2) {
        if (ellipse1.x < ellipse2.x + ellipse2.w &&
            ellipse1.x + ellipse1.w > ellipse2.x &&
            ellipse1.y < ellipse2.y + ellipse2.h &&
            ellipse1.y + ellipse1.h > ellipse2.y) {
            return true;
        } else {
            return false;
        }
    }
    if (ellipseCollision(bullet, enemy)) {
        s = 1; 
        enemy1fill = color('skyblue');
        //enemy1stroke = color(255,0,0);
        bullet.x = - 10;
        bullet.y = - 10;
        setTimeout(() => {   
            s = 0;
            enemy1fill = color(255,0,0);
            //enemy1stroke = color('orange');
        }, 4000);
    }
    if (ellipseCollision(bullet, enemy2)) {
        s2 = 1;
        enemy2fill = color('skyblue');
        //enemy2stroke = color(255,0,255);
        bullet.x = - 10;
        bullet.y = - 10;
        setTimeout(() => {            
            s2 = 0;
            enemy2fill = color(255,0,255);
            //enemy2stroke = color('orange');
        }, 6000);
    }
    if (ellipseCollision(bullet, enemy3)) {
        s3 = 1
        enemy3fill = color('skyblue');
        //enemy3stroke = color(255,255,0);
        bullet.x = - 10;
        bullet.y = - 10;
        setTimeout(() => {
            s3 = 0;
            enemy3fill = color(255,255,0);
            //enemy3stroke = color('orange');
        }, 3000);
    }


   if (enemy.x  <= player.x + 35 && enemy.x >= player.x - 35 && enemy.y <= player.y + 35 && enemy.y >= player.y - 35) {
       //Enemy 1 collision function
        lives--;
       player.x = 500;
       player.y = 400;
       enemy.x = 0;
       enemy.y = 0;
       enemy2.x = window.width - 300;
          enemy2.y = window.height - 300;
       enemy3.x = window.width - 500;
          enemy3.y = window.height - 500;
        console.log("We only have " + lives + " more lives");
       enemy1fill = color(255,0,0);
       enemy2fill = color(255,0,255);
       enemy3fill = color(255,255,0);
    }
    if (enemy2.x <= player.x + 35 && enemy2.x > player.x - 35 && enemy2.y <= player.y + 35 && enemy2.y >= player.y - 35) {
        //Enemy 2 collision function
        lives--;
       player.x = 500;
       player.y = 400;
       enemy2.x = window.width - 300;
       enemy2.y = window.height - 300;
        enemy.x = 0;
           enemy.y = 0;
        enemy3.x = window.width - 500;
           enemy3.y = window.height - 500;
        console.log("We only have " + lives + " more lives");
        enemy1fill = color(255,0,0);
        enemy2fill = color(255,0,255);
        enemy3fill = color(255,255,0);
    }
    if (enemy3.x <= player.x + 35 && enemy3.x >= player.x - 35 && enemy3.y <= player.y + 35 && enemy3.y >= player.y - 35) {
        //Enemy 3 collison function
        lives--;
       player.x = 500;
       player.y = 400;
       enemy3.x = window.width - 500;
       enemy3.y = window.height - 500;
        enemy2.x = window.width - 300;
           enemy2.y = window.height - 300;
        enemy.x = 0;
           enemy.y = 0;
        enemy1fill = color(255,0,0);
        enemy2fill = color(255,0,255);
        enemy3fill = color(255,255,0);
        console.log("We only have " + lives + " more lives");
    }
    if (lives === 0 && game){
    //End the game
        player.speed = player.speed - player.speed;
        enemy.speed = enemy.speed - enemy.speed;
        enemy2.speed = enemy2.speed - enemy2.speed;
        enemy3.speed = enemy3.speed - enemy3.speed;
        game = 0;
        alert("game over, your score is " + (score/100) + ".");
        score = 0;
    }
}


