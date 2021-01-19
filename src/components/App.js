import '../index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../services/authService';
import { BrowserRouter, Route } from 'react-router-dom';
import Formik from './Login';
import { SearchRestaurant } from './search/SearchRestaurant';
import { RestaurantDetail } from './RestaurantDetail';
import { Header } from './Header';
import { Register } from './Register';

const App =(props) => {
  const { fetchUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
    return (
      <div className="container">
          <BrowserRouter>
              <div className="container">
                  <Header/>
                  <Route exact path="/" component={SearchRestaurant} />
                  <Route exact path="/login" component={Formik} />
                  <Route path="/resgister" component={Register} />
                  <Route path="/restaurant/:id" component={RestaurantDetail} />
              </div>
          </BrowserRouter>
      </div>
  );
}

export default connect(null, {fetchUser}) (App);
