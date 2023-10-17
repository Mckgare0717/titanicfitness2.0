import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Login from './views/login';
import Home from './views/home';
import Blog from './views/blog';
import About from './views/about';
import Profile from './views/profile';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  function isLoggedIn(){
    return false
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/profile' element={isLoggedIn ? <Profile/> : <Navigate to={"/login"}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
