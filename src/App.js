import logo from './logo.svg';
import './App.css';
import SignUp from './ui/SignUp';
import SignIn from './ui/SignIn';
import ResponsiveAppBar from './ui/ResponsiveAppBar';
function App() {
  function Page(){
    return (
      <div>
       <ResponsiveAppBar/>
       <SignIn/>
       <SignUp/>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FEEDBACK MANAGEMENT SYSTEM</p>
      </header>
      <div className='App-body'>
        <Page/>
      </div>
    </div>
  );
}

export default App;
