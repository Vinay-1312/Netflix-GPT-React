import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
function App() {
  
  
  return (
    <Provider store={appStore}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Body />
    </Provider>
  );
}



export default App;
