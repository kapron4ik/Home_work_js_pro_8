const execCommand = () => {


  class Calc {
    constructor(){
      this.currentValue = 0;
      this.history = [];
    }
    execute( command ){
      this.currentValue = command.execute( this.currentValue );
      this.history.push(command);
    }
    getCurrentValue(){
      console.log('CurrentValue is:', this.currentValue);
      return( this.currentValue );
    }
  }

  function Command(fn, value) {
      this.execute = fn;
      this.value = value;
  }

  function add(value){
    return value + this.value;
  }

  function sub(value){
    return value - this.value;
  }

  function AddCommand(value){
    Command.call( this, add, value);
  }
  function SubCommand(value){
    Command.call( this, sub, value);
  }

  const ExecCalc = new Calc();
  ExecCalc.execute( new AddCommand( 20 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 30 ) );
  ExecCalc.execute( new AddCommand( 50 ) );
  ExecCalc.execute( new SubCommand( 15 ) );
  ExecCalc.getCurrentValue();

  console.log( ExecCalc );

}

export default execCommand;
