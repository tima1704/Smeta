import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './Components/Main/appWrapper';
import { AddSmeta } from './Pages/Cabinet/AddSmeta';
import { Home } from './Pages/Cabinet/HomePage/home';
import { SmetaItem } from './Pages/Cabinet/ItemSmeta';
import { URLS } from './Helpers/common';

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path={URLS.AUTH.LOGIN} />
        <Route path={URLS.$HOME} element={<Home />} />
        <Route path={URLS.ADD_SMETA} element={<AddSmeta />} />
        <Route path={URLS.GET_SMETA_BYID} element={<SmetaItem />} />
      </Routes>
    </AppWrapper>
  );
};
