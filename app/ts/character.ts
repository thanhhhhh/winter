interface ICharacter{
  name: string;
  hp: number;
  animations: string[];
}

export class Character implements ICharacter{
  name: string;
  hp: number;
  animations: string[];
  constructor(name: string, hp: number, animations: string[]){
    this.name = name;
    this.hp = hp;
    this.animations = animations;
  }
}

 