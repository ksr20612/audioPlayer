import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createMockServer from './mockServer/createMockServer';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from './stores/Store';
import { Provider } from 'react-redux';
import client from 'api/QueryClient';

// 수정 및 삭제 금지
createMockServer();

ReactDOM.render(
  // <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
          <App />
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
