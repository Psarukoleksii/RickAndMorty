import React from 'react';
import './App.css';
import {BaseLayout} from "./layout";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from "./components/homePage";
import {Episodes} from "./components/episodes";
import {MyWatchList} from "./components/myWatchList";
import {Locations} from "./components/locations";
import {Characters} from "./components/characters";

function App() {
  return (
    <div className={'container'}>
        <Router>
            <BaseLayout>
                <Switch>
                    <Route path={'/'} exact={true} component={HomePage}/>
                    <Route path={'/episodes'} component={Episodes}/>
                    <Route path={'/myWatchList'} component={MyWatchList} />
                    <Route path={'/locations'} component={Locations} />
                    <Route path={'/characters'} component={Characters} />
                </Switch>
            </BaseLayout>
        </Router>
    </div>
  );
}

export default App;
