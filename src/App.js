import { Provider } from 'react-redux' 
import { store } from './store/store'
import {BrowserRouter} from "react-router-dom" 
import './App.css'; 
import { AppRouter } from './router/AppRouter';

export const App = () => {
  return (
    <div className="App">
 
      <div style={{width: '100%'}}>
      <Provider store={store}>
          <BrowserRouter> 
          <AppRouter />
          </BrowserRouter>
        </Provider>
     
      </div>
       
      
    </div>
  );
}

 
