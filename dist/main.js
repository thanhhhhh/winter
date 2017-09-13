"use strict";
exports.__esModule = true;
var character_1 = require("./character");
var sub_1 = require("./sub");
var variables_1 = require("./variables");
var myTest = new sub_1.foo();
myTest.okNow();
var GameWorld = (function () {
    function GameWorld(canvasId) {
        this.canvas = document.getElementById(canvasId);
        console.log("canvas created " + this.canvas);
    }
    return GameWorld;
}());
var Game = (function () {
    function Game(title) {
        this.title = title;
    }
    Game.prototype.init = function () {
        console.log("Loading..." + this.title);
        //Load Game World
        var World = new GameWorld('canvas');
        //Load characters
        var jonSnow = new character_1.Character('Jon Snow', 100, variables_1.ani.jonsnow);
        console.log(jonSnow);
    };
    return Game;
}());
var gameOfThrones = new Game("George R.R. Martins Game of Thrones");
var studentList = [
    { name: "tom", age: 1, phone: 2 },
    { name: "charles", age: 2 }
];
function getGenerics(item) {
    // item.forEach(element => {
    //   console.log(element.name+element.age);
    // });
    item.forEach(function (e) {
        console.log(e.phone);
    });
}
getGenerics(studentList);
