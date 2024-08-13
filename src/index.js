import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redax/store/store';

import { BrowserRouter } from 'react-router-dom';
import history from './utiles/history/history';

import App from './Components/App/App';

import { ToastContainer } from 'react-toastify';

// normalize and basic styles for application
import 'normalize.css';
import './index.css';
import './sourses/styles/styles.scss';

import 'yet-another-react-lightbox/styles.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
      <ToastContainer autoClose={5000} />
    </BrowserRouter>
  </Provider>
);
