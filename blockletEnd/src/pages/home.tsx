
import logo from '../logo.svg';
import FormBox from '../components/Form';
import FormCard from '../components/FormCard'
import { useState } from 'react';
import { IUserData } from '../types/user';


function Home() {
  const [ editStatus, setEditStatus ] = useState<Boolean>(false)
  const [userData, setUserData] = useState<IUserData>({
    userName: 'John',
    email: 'john@blocklet',
    phone: 123456789
  })

  const handleFormChange = (data: IUserData) => {
    setUserData(data)
    setEditStatus(false)
  }

  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      {
        editStatus ? 
        <FormBox data={userData} onChangeEvent={ handleFormChange }/> :
        <FormCard data={userData} onChangeEdit={() => setEditStatus(true)}/>
      }
    </header>
  );
}

export default Home;
