 
import React, { useContext } from 'react';
import './App.css';
import { UseglobelContext } from './context/AppProvider';
import Home from './Home';
import Paging from './Paging';
import Search from './Search';


function App() {

  //const data = useContext(AppContext)

  
  return (
     <>
      <Search />
      <Paging />
      <Home />
     </>
  );
}

export default App;
