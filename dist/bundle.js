/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	exports.__esModule = true;
	var character_1 = __webpack_require__(1);
	var sub_1 = __webpack_require__(2);
	var variables_1 = __webpack_require__(3);
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	exports.__esModule = true;
	var Character = (function () {
	    function Character(name, hp, animations) {
	        this.name = name;
	        this.hp = hp;
	        this.animations = animations;
	    }
	    return Character;
	}());
	exports.Character = Character;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	exports.__esModule = true;
	var foo = (function () {
	    function foo() {
	    }
	    foo.prototype.okNow = function () {
	        console.log("OMGGGG");
	    };
	    return foo;
	}());
	exports.foo = foo;
	//hello 


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	exports.__esModule = true;
	exports.ani = {
	    jonsnow: [
	        'assets/characters/sauske/run/slice_1_0.png',
	        'assets/characters/sauske/run/slice_1_1.png',
	        'assets/characters/sauske/run/slice_1_2.png',
	        'assets/characters/sauske/run/slice_1_3.png',
	        'assets/characters/sauske/run/slice_1_4.png'
	    ],
	    nightking: [
	        'assets/characters/sauske/run/slice_1_0.png',
	        'assets/characters/sauske/run/slice_1_1.png',
	        'assets/characters/sauske/run/slice_1_2.png',
	        'assets/characters/sauske/run/slice_1_3.png',
	        'assets/characters/sauske/run/slice_1_4.png'
	    ]
	};


/***/ })
/******/ ]);