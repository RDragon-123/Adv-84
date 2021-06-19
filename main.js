canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Array_mars=["R1.jpeg","r2.jpg","R3.jpeg","r4.jpeg","r5.jpeg"];
randomNumber=Math.floor(Math.random()*5)

background_image=Array_mars[randomNumber];
rover_image="rover.png";
rover_x=100;
rover_y=200;
rover_width=100;
rover_height=100;
function add(){
  background_img=new Image();
  background_img.onload=uploadbackground;
  background_img.src=background_image;
  rover_img=new Image();
  rover_img.onload=uploadrover;
  rover_img.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='40'){
        down();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function down(){
     if(rover_y<=500){
         rover_y=rover_y+10;
         uploadbackground();
         uploadrover();
     }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}