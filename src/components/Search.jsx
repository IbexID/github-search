import React from 'react';
import cl from './Search.module.scss'

const Search = () => {
    return (
        <div className={cl.search}>
            <form className={cl.search__form}>
            <h2 className={cl.search__title}>Поиск по репозиториям GitHub</h2>
                <div className={cl.search__controls}>
                    <input className={cl.search__input} placeholder='Введите имя репозитория'/>
                    <button className={cl.search__button}>Найти</button>
                </div>
            </form>
        </div>
    );
};

export default Search;