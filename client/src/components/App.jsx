import { useState, useEffect } from 'react';
import { token } from '../spotify';
import Auth from './Profile/Auth';
import Profile from './Profile/Profile';
import { GlobalStyle } from '../styles';

export default function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <div>
      <GlobalStyle />
      {accessToken ? <Profile /> : <Auth />}
    </div>
  );
};