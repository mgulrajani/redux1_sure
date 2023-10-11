import reducers  from './state/reducers/index'
import { Provider } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import Counter from './component/Counter.js';
//React DevTools Extension for Chrome
//Redux DevTools Extension for Chrome
const store = createStore(reducers);

function App() {
  return (
   <Provider store={store}>
    <Counter/>


   </Provider>
  );
}

export default App;
/*
1. npm i redux react-redux
2.App.js provide the Provider of the store 
store is created using createStore( rootReducers )
from where are you exporting rootReducers , from the index.js of the
reducers folder

so create a separate folder with the name state ,in the src  folder
in the state folder 
create actions folder and reducers folder

in actions folder and reducers folder create index.js 
why we need this index.js in both the folders

in reducers we need index.js to export combinedReducers
because in our application we might create multiple reducers 
eg :counterReducer , EmployeeReducer , movieReducers

in action folder ,we have index.js to export the actions

in the index.js  -- use combineReducer method to combine all available reducers
and give them a key

*/