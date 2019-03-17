export class Calc {
  constructor(){
    this.currentValue = 0;
    this.history = [];
  }
  undo (){
    const cmd = this.history.pop();
    this.currentValue = cmd.undo(this.currentValue);
  }
  execute(command){
    this.currentValue = command.execute(this.currentValue);
    this.history.push(command);
  }
  getCurrentValue(){
    return this.currentValue;
  }
}

function Command  (fn, undo, value){
  this.execute = fn;
  this.value = value;
  this.undo = undo;
}

function add(value){
  return value + this.value
}

function sub(value){
  return value - this.value
}

function multiply(value){
  return value * this.value
}

function dividy(value){
  return value / this.value
}

export function AddCommand (value){
  Command.call(this, add, sub, value);
}

export function SubCommand (value){
  Command.call(this, sub, add, value);
}

export function MulCommand (value){
  Command.call(this, multiply, dividy, value);
}

export function DivCommand (value){
  Command.call(this, dividy, multiply, value);
}


const undoCalc = () => {

  const calcExmp = new Calc
  calcExmp.execute (new AddCommand (20));
  calcExmp.execute (new SubCommand (3));
  calcExmp.execute (new MulCommand (2));


  console.log('---- current value ----');
  console.log('before undo:', calcExmp.getCurrentValue() );
  calcExmp.undo();
  console.log('first undo:', calcExmp.getCurrentValue() );
  calcExmp.undo();
  console.log('second undo:', calcExmp.getCurrentValue() );
  calcExmp.undo();
  console.log('after undo:', calcExmp.getCurrentValue() );
  


}

export default undoCalc;