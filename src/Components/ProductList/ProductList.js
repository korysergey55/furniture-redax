import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProductsSelector } from '../../redax/selectors/selectors';

import ProductItem from './ProductItem/ProductItem';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

const ProductList = () => {
  const products = useSelector(getAllProductsSelector);

  return (
    <ul className={styles.produc_list}>
      {products?.map(product => (
        <ProductItem item={product} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default ProductList;
