import {React,useEffect} from 'react';
import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
//import BookingHistory from './pages/BookingHistory';
import 'antd/dist/reset.css';
import Feedback from './pages/FeedBack';
import Submission from './pages/Submission';
import About from './pages/About';
//import ThankYouPage from './pages/ThankYouPage';
import AdminHome from './pages/AdminHome';
import AddCar from './pages/AddCar';
const AuthenticatedApp = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('user');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/booking/:carId' element={<BookingCar />} />
        <Route path='/feedbackform' element={< Feedback />} />
        <Route path='/submissions' element={<Submission />} />
        <Route path='/about' element={<About />} />
        <Route path="/submission/:id" element={<Submission />} />
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/addcar' element={<AddCar/>}/>
        <Route path='/editdcar/:carid' element={<AddCar/>}/>
      </Routes>
    </div>
  );
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<AuthenticatedApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;