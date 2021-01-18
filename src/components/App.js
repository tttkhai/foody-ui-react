import '../index.css';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Login';
import { SearchRestaurant } from './SearchRestaurant';
import { RestaurantDetail } from './RestaurantDetail';
import { Header } from './Header';


class App extends React.Component() {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
          <BrowserRouter>
              <div>
                  <Header/>
                  <Route exact path="/" component={SearchRestaurant} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/resgister" component={Register} />
                  <Route path="/restaurant" component={RestaurantDetail} />
              </div>
          </BrowserRouter>
      </div>
  );
  }
}

export default connect(null, actions) (App);
