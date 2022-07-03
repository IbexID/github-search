import React from 'react';
import cl from './ResultItem.module.scss'

const ResultItem = (props) => {
    const imgSrc = props.avatar
    return (props.title===true
    ? (
        <div className={cl.resultItem}>
            <p className={cl.resultItem__info}>Имя пользователя</p>
            <p className={cl.resultItem__info}>Название репозитория</p>
            <p className={cl.resultItem__info}>Описание</p>
            <p className={cl.resultItem__info}>Аватар</p>
        </div>
    )
    : (
        <div className={cl.resultItem}>
            <p className={cl.resultItem__text}>{props.name}</p>
            <a href={props.address} target="_blank" className={cl.resultItem__text}>{props.address.slice(20 + props.name.length)}</a>
            <p className={cl.resultItem__text}>{props.description}</p>
            <img className={cl.resultItem__avatar} src={imgSrc} alt="avatar" />
            
        </div>
    ))
    ;
};

export default ResultItem;