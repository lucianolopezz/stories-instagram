import React, { useEffect, useContext, useState } from 'react';

import { MdAddCircle, MdPowerSettingsNew } from "react-icons/md";
import BounceLoader from "react-spinners/BounceLoader";
import { logout, getToken } from '../../services/auth';
import { Profile } from '../../components';
import api from '../../services/api';

import {
  Container,
  Header,
  Body,
} from './styles';

export default function Home({ history }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = getToken();

  useEffect(() => {

    async function getUsers() {
      const { data } = await api.get('/users');      
      setUsers(data);
      setLoading(false);
    }

    getUsers();

  }, []);

  function handleLogout(e) {
    e.preventDefault();

    logout();
    history.push('/');
  }  

  if(!user) {
    window.location.reload();
  }

  return (
    <Container>
      <Header>
        <Profile
          user={user}
          border='none'
        />
        <div>
          <a href="/add"><MdAddCircle color='#3897f0' size={30} /></a>
          <a className="logout" href="#" onClick={handleLogout}><MdPowerSettingsNew color='black' size={30} /></a>
        </div>
      </Header>
      <Body>
        <div className="header">
          <span>Stories</span>
          <span>Watch All</span>          
        </div>
        {loading && (
          <div className="loading">
            <BounceLoader
              size={60}
              color={"#3897f0"}
              loading={loading}
            />
          </div>
        )}
        {!!users.length && users.map(item => (
          <Profile
            key={item._id}
            user={item}
            hour={item.lastStorieDate}
          />
        ))}
      </Body>
    </Container>
  );
}
