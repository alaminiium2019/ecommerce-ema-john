import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <SearchBox></SearchBox>
            <Shop></Shop>
        </div>
    );
};

export default Home;