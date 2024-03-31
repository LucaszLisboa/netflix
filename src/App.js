import './App.css';
import { categories } from './api';
import Row from './components/row/Row';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      {categories.map( (category) => {
        return <Row 
                  key={category.name}
                  title={category.title}
                  isLarge={category.isLarge}
                  path={category.path}
                />
      })}
    </div>
  );
}

export default App;
