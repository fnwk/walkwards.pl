import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import ReactGa from 'react-ga4';
import RenderingDomLoader from './components/LoadingScreens/RenderingDomLoader';
import FetchLoader from './components/LoadingScreens/FetchLoader';

import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ResetPage from './pages/ResetPage/ResetPage';
import Dashboard from './pages/Dashboard/Dashboard';
import ResetAfterEmail from './pages/ResetAfterEmail/ResetAfterEmail';
import AccountActivated from './pages/AcountActivated/AcountActivated';
import PolicyPrivacy from './pages/PolicyPrivacy/PolicyPrivacy';
import TermsAndCondition from './pages/TermsAndConditions/TermsAndCondition';
import CompetitionRules from './pages/CopetitionRules/CompetitionRules';

const App = () => {
  useEffect(() => {
    ReactGa.initialize('G-QTY8VYPVVW');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App text-onyx overflow-hidden min-h-screen relative'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sendResetMail' element={<ResetPage />} />
        <Route path='dashboard/*' element={<Dashboard />} />
        <Route path='resetPassword' element={<ResetAfterEmail />}>
          <Route path=':invoiceId' element={<ResetAfterEmail />} />
        </Route>
        <Route path='accountActivated' element={<AccountActivated />} />
        <Route path='polityka-prywatnosci' element={<PolicyPrivacy />} />
        <Route path='terms-and-conditions' element={<TermsAndCondition />} />
        <Route path='regulamin-konkursow' element={<CompetitionRules />} />
      </Routes>
    </div>
  );
};

export default App;
