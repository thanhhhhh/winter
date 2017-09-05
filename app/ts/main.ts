// import {Person} from "./sub";
import {foo} from "./sub";    
 

 
let myTest = new foo();  
 myTest.okNow();

interface IGame{
  title: string; 
  init():void;
}

class GameWorld{
  canvas: any;
  constructor(canvasId: string){
    this.canvas = document.getElementById(canvasId);
    console.log(`canvas created ${this.canvas}`);
  }

}

class Game implements IGame{
  
  title: string;
  
  constructor(title: string){
    this.title = title;
  }
  init(){
    console.log(`Loading...${this.title}`);
    let World = new GameWorld('canvas');
  }

}

let gameOfThrones = new Game("George R.R. Martins Game of Thrones");
gameOfThrones.init();
 