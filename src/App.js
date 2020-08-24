import React, { Fragment, useContext } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';
import { ProductContext } from './contexts/ProductsProvider';
const App = () => {
  const {products,modalOpen} = useContext(ProductContext);
  return (
    <Fragment>  
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details/:id" render={(props)=>products.length>0 ? <Details {...props} />: <Redirect to="/"/>} />
        <Route exact path="/cart" component={Cart} />
        <Route component={PageNotFound} /> {/* If no path matches, go to this component */}
      </Switch>
      {modalOpen && <Modal />}
    </Fragment>
  );
};

export default App;