import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Routes>
      <Route path='/login' />
      <Route path='' />
    </Routes>
  );
};
