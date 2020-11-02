import React, { useState } from 'react';
import './SearchBox.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const SearchBox = () => {
    return (
        <div className="searchbar">
            <div className="container d-flex">
                <input type="text" placeholder="what are you looking for?" className="searchInput"></input>
                <SearchIcon className="searchIcon"></SearchIcon>
                <div className="basket_option d-flex">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="basket_count">0</span>
                </div>
            </div>

        </div>
    );
};

export default SearchBox;