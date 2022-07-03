import React, { useState } from 'react';
import ResultItem from './ResultItem';
import cl from './SearchResults.module.scss'

const SearchResults = (props) => {
    
    return (
        <div className={cl.searchResults}>
            <div className={cl.searchResults__info}>
                <h2 className={cl.searchResults__title}>Результат поиска: </h2>
                <h5 className={cl.searchResults__title}>Найдено записей: {props.result.total_count || 0}</h5>
            </div>
            <div className={cl.searchResults__output}>
                {
                props.isLoading && !props.errorMessage
                ? <span className={cl.searchResults__loading}></span>
                : props.errorMessage && props.isLoading ? <p className={cl.searchResults__error}>Возникла ошибка: {props.errorMessage}</p>
                : <>
                    {props.isResultEmpty 
                        ? <p className={cl.searchResults__text}>Ничего не найдено</p> 
                        : <ResultItem key={Date.now()} title={true} />
                        }
                        { props.result.items
                        ? props.result.items.map( (item, i) =>{
                            if (i<9){
                            return (
                                <ResultItem title={false} key={i} name={item.owner.login} address={item.html_url} description={item.description} avatar={item.owner.avatar_url} />
                            )}
                        })
                        : ''
                        }
                </>}
                
            </div>
        </div>
    );
};

export default SearchResults;