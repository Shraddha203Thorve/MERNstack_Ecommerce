
import './App.css';
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from "./component/Home/Home"
import webFont from "webfontloader"
import React from "react"
// import Loader from './component/layout/Loader/Loader';
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { useSelector } from "react-redux";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js"

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  
  React.useEffect(()=>{
    webFont.load({
      google:{
        families:['Roboto','Droid Sans','Chilanka']
      }
    })
   store.dispatch(loadUser())
  },[])
  
  return (
   <Router>
     <Header/>
     {isAuthenticated && <UserOptions user={user}/>}
     <Route exact path="/" component={Home}/>
     <Route exact path="/product/:id" component={ProductDetails}/>
     <Route exact path="/products" component={Products}/>
     <Route exact path="/products/:keyword" component={Products}/>
     <Route exact path="/search" component={Search}/>
     <Route exact path="/login" component={LoginSignUp}/>
     <Footer/>
   </Router>
  );
}

export default App;
