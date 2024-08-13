import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getModalSelector } from '../../redax/selectors/selectors';

import { pathes } from '../../utiles/pathes/pathes';

import Header from '../header/Header';
import Headroom from 'react-headroom';

import MobileModalMenu from '../MobileModalMenu/MobileModalMenu';
import Loader from '../loader/Loader';

const SharedLayout = lazy(() => import('../../Components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../../Pages/homePage/HomePage'));
const AboutUs = lazy(() => import('../../Pages/aboutUsPage/AboutUsPage'));
const ProcessPage = lazy(() => import('../../Pages/processPage/ProcessPage'));
const PortfolioPage = lazy(() => import('../../Pages/portfolioPage/PortfolioPage'));
const ContactPage = lazy(() => import('../../Pages/contactPage/ContactPage'));
const ProductDetails = lazy(() => import('../../Pages/ProductDetails/ProductDetails'));
const NotFoundPage = lazy(() => import('../../Pages/notFoundPage/NotFoundPage'));

const App = () => {
  const modal = useSelector(getModalSelector);

  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path={pathes.home} element={<HomePage />} />
            <Route path={pathes.about} element={<AboutUs />} />
            <Route path={pathes.process} element={<ProcessPage />} />
            <Route path={pathes.portfolio} element={<PortfolioPage />} />
            <Route path={`${pathes.portfolio}/:productDetailsName`} element={<ProductDetails />} />
            <Route path={pathes.contact} element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      {modal ? <MobileModalMenu /> : null}
    </div>
  );
};

export default App;
