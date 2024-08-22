import { categories } from '../api';
import { Navbar } from '../components/navbar/Navbar';
import { Banner } from '../components/banner/Banner';
import { Row } from '../components/row/Row';

export function Filmes(){
    return(
    <div className="">
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
    )
}