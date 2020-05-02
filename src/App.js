import React, {Component} from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <NavBar />

                <main>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/recipes' exact component={Recipes} />
                    <Route path='/recipes/:recipeId' exact component={RecipeDetails} />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
