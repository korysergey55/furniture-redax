import { createSelector } from '@reduxjs/toolkit';

export const getModalSelector = state => state.modal.modal;

export const getProductSelector = state =>
  state.partfolio.products?.find(item => item.path === state.partfolio.productPath);

export const getAllProductsSelector = state => state.products.products;
