import React from 'react';
import "./styles/style.scss"
import Header from "./components/Header/Header";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Order/>
            </main>
            <Footer/>
        </>
    );
};

export default App;