import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import About from "./components/pages/About.jsx";
import Help from "./components/pages/Help.jsx";
import Settings from "./components/pages/Settings.jsx";
import News from "./components/pages/News.jsx";
import Main from "./components/pages/Main.jsx";

export default function Routes() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Link to="/"> Главная</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/news">Новости</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/about-us">О Нас</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/help">Помощь</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link to="/settings">Настройки</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exat path="/">
          <Main />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}
