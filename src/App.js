import './App.css';
import HeadTable from './components/HeadTable'
import BodyTable from './components/BodyTable'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <table >
        <HeadTable />
        <BodyTable />
      </table>
    </Provider>
  );
}

export default App;
