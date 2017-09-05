"use strict";
exports.__esModule = true;
// import {Person} from "./sub";
var sub_1 = require("./sub");
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
        var World = new GameWorld('canvas');
    };
    return Game;
}());
var gameOfThrones = new Game("George R.R. Martins Game of Thrones");
gameOfThrones.init();
