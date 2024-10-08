import logo from './logo.svg';
import './App.css';
import SignUp from './ui/SignUp';
import SignIn from './ui/SignIn';
import ResponsiveAppBar from './ui/ResponsiveAppBar';
import User from './ui/User';
import View from './ui/View';


function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Signin":
        return ( <div> <ResponsiveAppBar store={store}/> <SignIn/> </div>)
      case "Signup":
        return ( <div> <ResponsiveAppBar store={store}/><SignUp/></div>)  
      case "User":
        return (<div><ResponsiveAppBar store={store}/><User/></div>)
      case "View":
        return (<div><ResponsiveAppBar store={store}/><View/></div>)
     }
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
