 import './App.css';

// componenets
import Header from './components/header/Header';
// routing is of two types 
// App.js src folder ke andar hai aur mujhe folder ke bahar move arna hai toh we will use this '../' dot dot forward slash rout kar deta hai (src here)folder ke bhar but './' same folder ke andar move karne ke liye hain



// this app componenet is the main componenent
function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
