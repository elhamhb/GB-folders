import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.css';
import Header from '../../componenets/Header/Header';
import Footer from '../../componenets/Footer/Footer';



const layout = props => {


  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col">
            <main className={classes.Content}>{props.children}</main>
            </div>
          </div>
      </div> 

      <Footer />


    </React.Fragment>
  );
};

export default layout;