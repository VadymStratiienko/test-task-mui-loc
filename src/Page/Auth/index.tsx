import React, { FC, useState } from 'react';
import LoginPage from './Login';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../utils/hook';

const AuthComponent: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const { loading } = useAppSelector((state) => state.loading);
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPassword(password);
    setUsername(username);
    if (username === 'admin' && password === '12345') {
      setIsValid(true);
      localStorage.setItem('username', username);
      navigate('/profile');
    } else {
      setIsValid(false);
    }
  };

  return (
    <LoginPage
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
      username={username}
      password={password}
      isValid={isValid}
      loading={loading}
    />
  );
};

export default AuthComponent;
