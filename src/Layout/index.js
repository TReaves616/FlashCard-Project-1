import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from './Home/Home'
import Deck from './Home/Deck'
import Study from './Home/Study'
import CreateDeck from './Home/CreateDeck'
import EditDeck from "./Home/EditDeck";
import CreateCard from './Home/CreateCard';
import EditCard from './Home/EditCard';
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/decks/:deckId/cards/new'>
            <CreateCard />
          </Route>
          <Route path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>
          <Route path='/decks/new'>
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/:deckId'>
            <Deck />
          </Route>
       
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;