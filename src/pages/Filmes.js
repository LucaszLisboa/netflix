import { categories } from '../api';
import { Navbar } from '../components/navbar/Navbar';
import { Banner } from '../components/banner/Banner';
import { Row } from '../components/row/Row';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Filmes(){
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser();
  },[])

  const fetchUser = () => {
    axios.get('http://localhost:3001/user', {
      headers: {
        'Authorization': sessionStorage.getItem('token')
      }
    }).then((response) => {
      let user = response.data
      setUser(user)
    }).catch((error) => {
      console.log(error)
    })
  }

  return(
  <div className="">
    <Navbar usuario={user}/>
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