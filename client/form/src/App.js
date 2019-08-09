import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm.js';
import GetData from './components/GetData.js';

class App extends React.Component {
  constructor() {
    super();
  }
render() {
  return (
    <div className="App">
     <RegisterForm />
     <GetData />
    </div>
  );
  }
}

export default App;
