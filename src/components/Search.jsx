import React from 'react';
import cl from './Search.module.scss'

const Search = (props) => {
    return (
        <div className={cl.search}>
            <form className={cl.search__form}>
            <h2 className={cl.search__title}>Поиск по репозиториям GitHub</h2>
                <div className={cl.search__controls}>
                    <input 
                    className={cl.search__input} 
                    value={props.searchQuery} 
                    onChange={(e)=>{
                        props.setSearchQuery(e.target.value);
                    }}
                    onSubmit={()=>props.fetchRepos(props.searchQuery)}
                    placeholder='Введите имя репозитория'
                    />
                    <button 
                    className={cl.search__button}
                    onClick={(e) => {
                        e.preventDefault();
                        props.fetchRepos(props.searchQuery)}}
                    >Найти</button>
                </div>
            </form>
        </div>
    );
};

export default Search;