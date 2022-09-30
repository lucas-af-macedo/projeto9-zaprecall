import ReactDOM from 'react-dom';
import App from './components/App';
import logo from './assets/img/logo.png'

import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render(<App logo={logo}/>, document.querySelector('.root'));
