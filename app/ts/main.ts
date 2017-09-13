import {Character} from "./character";
import {foo} from "./sub";    
import {ani} from "./variables" 

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

    //Load Game World
    let World = new GameWorld('canvas');

    //Load characters
    let jonSnow = new Character('Jon Snow',100,ani.jonsnow);
    console.log(jonSnow);
  }

}

let gameOfThrones = new Game("George R.R. Martins Game of Thrones");
//gameOfThrones.init();
 
interface StudentInfo {
  name: string;
  age: number;
  phone?: number;
}

let studentList: Array<StudentInfo> = [
  {name: "tom",age:1,phone:2},
  {name: "charles",age:2}
]

function getGenerics(item: Array<StudentInfo>) {
  // item.forEach(element => {
  //   console.log(element.name+element.age);
  // });
  item.forEach(e => {
    console.log(e.phone);
  });
}

getGenerics(studentList);