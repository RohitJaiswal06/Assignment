
import './App.css';
import Dashboard from './components/Dashboard';
import Product from './components/Products';
import Order from './components/Orders';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path='/' element ={<Dashboard/>}/>
        <Route path='/products' element ={<Product/>}/>
        <Route path='/orders' element ={<Order/>}/>
    </Routes>
  );
}

export default App;
