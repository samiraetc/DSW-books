import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><NavLink to="/livros" exact>Home</NavLink></li>
                    <li><NavLink to="/livros/novolivro" exact>Novo Livro</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
