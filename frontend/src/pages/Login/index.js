import React, { useState, useEffect, useCallback } from 'react';

import { setToken } from '../../services/auth';
import api from '../../services/api';

import {
  Container,
  Form,
} from './styles';

export default function Login({ history }) {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleOnChange = useCallback(event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  });

  async function handleLogin() {
    try {

      if(!user.email) return;

      const { data } = await api.post('/sessions', user);

      setToken(data);
      history.push('/home');
      
    } catch (error) {
      
    }
  }

  return (
    <Container>
      <Form>
        <div className="form-group logo">
          <img src="https://cdn.clipart.email/9b235c5200ba604a86d1ae6cd5463903_transparent-instagram-stories-logo-png_512-512.png" />
        </div>
        <div className="form-group">
          <input placeholder="Nome" type="text" name="name" onChange={handleOnChange} />
        </div>
        <div className="form-group">          
          <input placeholder="E-mail" type="text" name="email" onChange={handleOnChange} />
        </div>
        <button type="button" onClick={handleLogin}>ENTRAR</button>
      </Form>
    </Container>
  );
}
