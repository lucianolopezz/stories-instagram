import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Profile } from '../../components';
import ReactStories from 'react-insta-stories';
import { MdClose } from "react-icons/md";
import api from '../../services/api';

import {
  Container,
  Header,
} from './styles';

const stories = [
  {
    url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
  },
  {
    url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
  },
 ];

export default function Stories() {
  const [user, setUser] = useState(null);
  const { _id } = useParams();

  useEffect(() => {

    async function getUser(){
      const { data } = await api.get(`/users/${_id}`);
      setUser(data);
    }

    getUser();
  }, []);  

  if(!user) return null;

  return (
    <Container>
      <Header>
        <Profile
          user={user}
          theme='white'
          border='none'
        />
        <a href="/home"><MdClose /></a>
      </Header>
      <ReactStories
        className='teste'
        stories={user.stories}
        defaultInterval={4000}
        width={400}
        height={550}         
      />
    </Container>
  );
}
