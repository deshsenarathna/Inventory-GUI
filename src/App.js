
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import CreateProduct from './components/CreateProduct';
import VeiwDetails from './components/Veiwdetails';
import EditProduct from './components/EditProduct';
import Home from './components/Home';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/productTable" element={<ProductTable/>}></Route>
    <Route path="/product/create" element={<CreateProduct/>}></Route>
    <Route path="/product/veiw/:productCode" element={<VeiwDetails/>}></Route>
    <Route path="/product/edit/:productCode" element={<EditProduct/>}></Route>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
