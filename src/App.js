import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./containers/CartContainer";
import ItemContainer from "./containers/ItemContainer";
import ItmesContainer from "./containers/ItemsContainer";





const App = () => {
	return (
		<BrowserRouter>
			<header className="container-fluid navbar">
				<Navbar />
			</header>
			<Switch>
				<Route path="/" exact component={ ItmesContainer } />
				<Route path="/cart" exact component={ CartContainer } />
				<Route path="/item/:id" exact component={ ItemContainer } />
			</Switch>
		</BrowserRouter>
	)
}

export default App
