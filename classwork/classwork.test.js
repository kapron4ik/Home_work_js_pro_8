import { Calc,AddCommand,SubCommand,MulCommand,DivCommand } from './classwork';
test('Calc init', () => {
    let calc = new Calc();
    expect( calc ).toBeDefined()
})

test('Calc add test', () => {
    let calc = new Calc();
        calc.execute (new AddCommand (20));
        calc.execute (new SubCommand (3));
        calc.execute (new MulCommand (2));

       
    expect( calc.currentValue ).toBe( 34 )
})
