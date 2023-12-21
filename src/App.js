import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main />
      <Footer logo={logo} />
    </div>
  );
}

export default App;