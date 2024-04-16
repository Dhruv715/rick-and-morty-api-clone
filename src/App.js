// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';
import Main2 from './component/Main2';

function App() {
  return (
   <>
          <Navbar/>
          {/* Static Data */}
          {/* <Main/> */}

          {/* API Data Fetching Using Axios */}
          <Main2/>
          <Footer/>
   </>
  );
}

export default App;
