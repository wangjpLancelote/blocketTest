import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import FormBox from '../components/Form';
import FormCard from '../components/FormCard'
import { useState } from 'react';


function Home() {
  const [ editStatus, setEditStatus ] = useState<Boolean>(false)
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      {
        editStatus ? 
        <FormBox data={{ userName: 'John', email: 'john@blocklet', phone: 123456789 }} onChangeEvent={() => setEditStatus(false)}/> :
        <FormCard data={{ userName: 'John', email: 'john@blocklet', phone: 123456789 }} onChangeEdit={() => setEditStatus(true)}/>
      }
    </header>
  );
}

export default Home;
