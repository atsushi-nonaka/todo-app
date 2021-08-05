import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './routers/AppRouter';

import { store } from './store/store';
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root')
);

