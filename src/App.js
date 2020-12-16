import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryItems from "./components/Category/CategoryItems";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./containers/CartContainer";
import CategoryContainer from "./containers/CategoryContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import ItmesContainer from "./containers/ItemsContainer";
import SingleProductContainer from "./containers/SingleProductContainer";





const App = () => {
	return (
		<BrowserRouter>
			<div className="container-fluid navbar">
				<Navbar />
			</div>
			<Switch>
				<Route path="/item/:id" exact component={ SingleProductContainer } />
				<Route path="/cart" exact component={ CartContainer } />
				<Route path="/categories" exact component={ CategoryContainer } />
				<Route path="/categories/:categoryName" exact component={ CategoryItems } />
				<Route path="/favorites" exact component={ FavoritesContainer } />
				<Route path="/" component={ ItmesContainer } />
			</Switch>
		</BrowserRouter>
	)
}

export default App
