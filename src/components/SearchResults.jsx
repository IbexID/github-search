import React from 'react';
import cl from './SearchResults.module.scss'

const SearchResults = () => {
    return (
        <div className={cl.searchResults}>
            <div className={cl.searchResults__info}>
                <h2 className={cl.searchResults__title}>Результат поиска: </h2>
                <h5 className={cl.searchResults__title}>Найдено записей: 0</h5>
            </div>
            <div className={cl.searchResults__output}>
                <p className={cl.searchResults__text}>Ничего не найдено</p>
            </div>
        </div>
    );
};

export default SearchResults;