const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;

var swimmers,swimmer1,swimmer2;
var waterSound;
var lake, swimmer1_img, swimmer2_img;

function preload(){
  lake = loadImage("track2.jpeg");
  waterSouund = loadSound("water.wav");  
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
  waterSound.play();

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
