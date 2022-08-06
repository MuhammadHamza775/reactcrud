import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { View } from './pages/View';

function App() {
  return (
    <>
     
     <Routes >
       <Route path='/' element={<Index/>}/>
       <Route path='/view' element={<View />}  />
     </Routes>
    
     
    
    </>
  );
}

export default App;
