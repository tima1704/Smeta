import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import './Styles/index.css';

const queryClinet = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClinet}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
