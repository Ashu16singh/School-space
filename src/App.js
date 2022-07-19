import Home from './Components/Home';
import './App.css';
import {Routes ,Route } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import Update from './Components/Update';

function App() {
  return (
    <div>
    
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/users/add"  element={<AddStudent/>} />
        <Route exact path="/users/edit/:id"  element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
