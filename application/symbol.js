/*
  Symbol demo
*/

  // let mySymbol = Symbol('name');
  //
  // console.log( mySymbol );
  // console.log( typeof( mySymbol ) );
  //
  // let mySymbol2 = Symbol('name');
  //
  // console.log('Eqaul', mySymbol === mySymbol2);
  //
  // /*
  //   Global register
  // */
  //
  // let nameSymbol = Symbol.for('name'); // Создаст новый символ
  // // Найдет в глобальном хранилище символов для этого домена - если его там нет, создаст
  // let secondNameSymbol = Symbol.for('name')
  //
  // console.log(secondNameSymbol === nameSymbol);
  // // // Найдет символ и вернет его
  // // let getSymbol = Symbol.keyFor( Symbol.for('name') );
  //
  // // console.log( getSymbol );
  // const myObj = {
  //   key: 'value',
  //   [nameSymbol]: 'WOW'
  // }

    let proto = {
      url: 'https://'
    }

    class Post {
      constructor(name, url){
          this.name = name;
          if( url !== undefined ){
            this.url = url;
          }

          Object.setPrototypeOf(this, proto);
      }
    }

    let myPost = new Post('name');
    console.log( myPost, myPost.url );






  // console.log( myObj[secondNameSymbol] );
  // console.log( document.querySelectorAll('div') );
  //
  // const numbersArray = [1,2,3,4,5];
  //
  // const iterator = numbersArray[Symbol.iterator];
  // console.log( iterator );
  //

  function *gen(){
    console.log(1);
    yield 1;
    console.log(2);

    return 2;
  }

  const get_test = gen();

  const valueOfGen = get_test.next();
  console.log( valueOfGen );

  const valueOfGen2 = get_test.next();
  console.log( valueOfGen2 );


  // console.log( myObj[secondNameSymbol]);
  //Symbol.iterator
