import './App.css';
import Dashboard from './dashboard';
import Products from './products';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Users from './users';
import CreateUser from './createuser';
import CreateProduct from './createproduct';
import EditUser from './edituser'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from './usercontext';
import { ProductProvider } from './productcontext';
import EditProduct from './editproduct';


function App() {
  return (
    <Router>

      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">

              <Switch>
                
                <Route path="/" component={Dashboard} exact={true}></Route>
                <UserProvider>
                <ProductProvider>
                  <Route path="/product" component={Products} exact={true}></Route>
                  <Route path="/create-product" component={CreateProduct} exact={true}></Route>
                  <Route path="/product/edit/:id" component={EditProduct} exact={true}></Route>
                </ProductProvider>
                
                
                  <Route path="/user" component={Users} exact={true}></Route>
                  <Route path="/create-user" component={CreateUser} exact={true}></Route>
                  <Route path="/user/edit/:id" component={EditUser} exact={true}></Route>
                </UserProvider>

              </Switch>

            </div>
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
