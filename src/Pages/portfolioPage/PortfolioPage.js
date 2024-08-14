import React from 'react';

import ProductList from '../../Components/ProductList/ProductList';

import styles from './styles.module.scss';

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  );
};

export default PortfolioPage;
