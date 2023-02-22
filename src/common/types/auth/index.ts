import React from 'react';

export interface IPropsLogin {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
  loading: boolean;
}
