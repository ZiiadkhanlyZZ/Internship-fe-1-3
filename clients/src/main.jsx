import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import ContextApi from './Contex/Contex.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>
);
