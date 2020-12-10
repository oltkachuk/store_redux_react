import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Item from "./components/ItemList/Item/Item";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./containers/CartContainer";
import ItmesContainer from "./containers/ItmesContainer";





const App = () => {
	return (
		<BrowserRouter>
			<header className="container-fluid navbar">
				<Navbar />
			</header>
			<Switch>
				<Route path="/" exact component={ ItmesContainer } />
				<Route path="/cart" exact component={ CartContainer } />
				{/* <Route path="/item/:id" exact component={ ItemContainer } /> */}
			</Switch>
		</BrowserRouter>
	)
}

export default App
