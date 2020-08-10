import React from "react";

import { BrowserRouter, Switch, Route} from "react-router-dom"


import Project from "./pages/project";
import Product from "./pages/product";
import Bases from "./pages/bases";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Main} /> */}
            <Route exact path="/" component={Project} />
            <Route path="/projects/:key" component={Product} />
            <Route path="/base_name/:key"component={Bases}/>
        </Switch>
    
    
    </BrowserRouter>
);

export default Routes;