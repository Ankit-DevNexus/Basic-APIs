
// import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/api/contact-us'  element ={<ContactUs />} />
        <Route path='/api/sign-in' element ={<SignIn />} />
        <Route path='/api/sign-up' element ={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
