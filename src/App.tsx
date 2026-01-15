import React from 'react';
import './index.css';
import Header from './components/header';
import Banner from './components/banner';
import Sobre from './components/sobre';
import Projetos from './components/projetos';
import Contato from './components/contato';
import ContrateBtnFlutuante from './components/contrateBtnFlutuante';

const App: React.FC = () => {
    return (
        <div className="container">
            <Header />

            <main className="main">
                <Banner />
                <Sobre />
                <Projetos />
                <Contato />
            </main>

            <ContrateBtnFlutuante />
        </div>
    );
};

export default App;
