import React, { useState } from 'react';

import "./global.css";

//import Header from './Header';
import Logon from './pages/Logon';

function App() {

  return (
    <Logon />
  );

  // const [counter, setCounter] = useState(0);

  // // Array [valor, funcaoDeAtualizacao]

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // return (
  //   // <Header title="Semana OmniStack" />
  //   // <Header>
  //   //   Semana OmniStack
  //   // </Header>
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={increment}>Incrementar</button>
  //   </div>
  // );
}

export default App;
