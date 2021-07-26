import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Mac from './components/Mac';
import iPad from './components/iPad';
import iPhone from './components/iPhone';
import TV from './components/TV';
import Watch from './components/Watch';
import Music from './components/Music';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import { render } from 'react-dom';
// import GenerateList from './components/GenerateList';


function App() {

  
    const products =["Mac","iPad","iPhone",'Watch','TV','Music']; 
    const proList = [Mac,iPad,iPhone,Watch,TV,Music];
    
    const productsList = products.map((element,i) => {
      return <Link key = {element.toString} to={`/${element}`}>
        {element}
      </Link>
    });

    const porductsRoute = proList.map((element)=>{
      return <Route key = {element.toString} path={`/${element}`}>{element}</Route>
    });



  return (
    <div>
    <Router>
      <nav>
        {/* <Link to ='/mac'>
            <div>Mac</div>
        </Link>
        <Route path = '/mac'>
          <Mac/>
        </Route> */}
        {console.log(porductsRoute)}
        {productsList}
        {porductsRoute}
        
      </nav>
    </Router>
      
    </div>
  );
}

export default App;
