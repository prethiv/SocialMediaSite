import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import StatusBar from './components/StatusBar';
function App() {
  return (
    <div className='container'>
          <Header /><br/>
          <StatusBar/>
          <br/>
          <Feed />
    </div>

  );
}

export default App;
