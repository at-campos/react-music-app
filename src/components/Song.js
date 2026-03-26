import React, { Component } from 'react';
import cover from './disc.svg';

class Song extends Component{
    constructor({ title, artist, duration}){
        super(title, artist, duration)
        this.title = title;
        this.artist = artist;
        this.duration = duration;
    }

    render(){
        return(
            <div className='songCard'>
                <img src={cover} className='songCard__cover'/>
                <div className='songCard__info'>
                    <p className='songCard__title'>{this.title}</p>
                    <p className='songCard__artist'>{this.artist}</p>
                </div>
                <p className='songCard__duration'>{this.duration}</p>
            </div>
        )
    }
}

export default Song;