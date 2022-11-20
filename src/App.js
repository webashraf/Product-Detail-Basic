import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import NoFound from './Components/Note Found/NoFound';
import PDetails from './Components/ProductDetails/PDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={ <Home/> }>
              </Route>
              <Route exact path='/home' element={ <Home/> }>
              </Route>
              <Route path='/shop/:pId' element={<PDetails />}>
              </Route>
              <Route path='*' element={<NoFound/>}>
              </Route>
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
