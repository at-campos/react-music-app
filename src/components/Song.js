import React from 'react';
import cover from './disc.svg';
import add from './plus-circle.svg';
import remove from './trash.svg'

const Song = ({ title, artist, duration, addButton}) => {

    const AddDeleteBtn = (buttonCheck) => {
        if(buttonCheck.buttonCheck === true){
            return <button><img src={add} /></button>;
        } else {
            return <button><img src={remove} /></button>;
        }
    }

    return(
        <div className='songCard'>
            <img src={cover} className='songCard__cover'/>
            <div className='songCard__info'>
                <p className='songCard__title'>{title}</p>
                <p className='songCard__artist'>{artist}</p>
            </div>
            <p className='songCard__duration'>{duration}</p>
            <AddDeleteBtn buttonCheck={addButton} />
        </div>
    )
}

export default Song;