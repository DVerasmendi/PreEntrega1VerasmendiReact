// src/app.jsx
import Navbar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bite Bliss"/>
    </>
    
  );
}

export default App;

