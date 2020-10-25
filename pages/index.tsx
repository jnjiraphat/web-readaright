import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components'
import axios from 'axios';


const StyledH1 = styled.h1`
  color : red;
`


const Index: React.FunctionComponent = () => {

  const [person, setPerson] = useState([]);

  async function fetch() {


    const result = await axios(
      'https://jsonplaceholder.typicode.com/users',
    );

    setPerson(result.data);
    // console.log(person)

  }
  useEffect(() => {
    fetch()
  });
  return (
    <Layout title="Home">
      <StyledH1>Hello 👋</StyledH1>
      <ul>
        {person.map(item => (
          <li key={item['id']}>
            {item['name']}

          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default Index