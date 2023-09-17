import React from 'react';
import {Route} from "react-router";
import home from './index';

export default [
    <Route key={"/home"} exact path={'home'} component={home}/>
];