import './App.css';
//-------------------------------component--------------------------------
import ButtonLogin  from './components/button/login/ButtonLogin'
import ButtonSignUp  from './components/button/sign-up/ButtonSignUp'
function App() {
    return (
        <div className="App">
            <ButtonLogin />&nbsp;
            <ButtonSignUp />
        </div>
  );
}   
export default App;
