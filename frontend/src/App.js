import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import AttendancePage from './screens/attendancepage/AttendancePage';
import EmployeesListPage from './screens/employeeslistPage/EmployeesListPage';
import { LandingPage } from './screens/landingpage/LandingPage';
import LoginPage from './screens/loginPage/LoginPage';
import RegisterPage from './screens/registerPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/login" component={LoginPage} ></Route>
        <Route path="/register" component={RegisterPage} ></Route>
        <Route path="/attendance" component={AttendancePage}></Route>
        <Route path="/employees" component={EmployeesListPage}></Route>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
