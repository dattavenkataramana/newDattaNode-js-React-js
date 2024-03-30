import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './componets/Login';
import Home from './componets/Home';

import './App.css';

function App() { 
  return(
     <BrowserRouter>
     <Routes> 
         <Route path="/" element={<Login/>}/>
         <Route path="/home" element={<Home/>}/> 
      </Routes>
     </BrowserRouter>
  )
}

export default App;