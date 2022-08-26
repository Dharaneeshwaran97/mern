import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import React,{useEffect,useState} from 'react'
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//     console.log("Testing Values");

//     fetch("http://localhost:5000/test", {
//       method: 'GET',
//        headers: { 'Content-Type': 'text/plain', } 
//     })
//       .then(res => res.json()).then(res => this.setState({ apiResponse: res }));
//       console.log(this.state.apiResponse);
//   }
//   componentDidMount() {
//     this.callAPI();

//   }
//   render() {
//     // function App(){
//     return (
//       <Router>
//         <NavBar />
//        <h2>  {this.state.apiResponse}  </h2>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />

//         </Routes>
//       </Router>
//     );
//   }
// }
function App() {
  
  
  // console.log("Dharanidata", data);
  // constructor=(props)=> {
  //       super(props);
  //       this.state = { apiResponse: "" };
  //     }

  //     callAPI=()=> {
  //       console.log("Testing Values");

  //       fetch("http://localhost:5000/test", {
  //         method: 'GET',
  //          headers: { 'Content-Type': 'text/plain', } 
  //       })
  //         .then(res => res.json()).then(res => this.setState({ apiResponse: res }));
  //         console.log(this.state.apiResponse);
  //     };
  //     callAPI();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />

      </Routes>
    </Router>
  );
}

export default App;
