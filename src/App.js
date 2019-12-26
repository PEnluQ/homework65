import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import Layout from "./components/Layout/Layout";

const F = () => {
    return (
       <BrowserRouter>
         <Layout>
           <Switch>
             <Route path='/content/admin' component={MainPage}/>
           </Switch>
         </Layout>
       </BrowserRouter>
    );
};

export default F;