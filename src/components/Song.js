import cover from './disc.svg';

const Song = ({ key, title, artist, duration}) => {
    return(
        <div className='songCard' id={key}>
            <img src={cover} className='songCard__cover'/>
            <div className='songCard__info'>
                <p className='songCard__title'>{title}</p>
                <p className='songCard__artist'>{artist}</p>
            </div>
            <p className='songCard__duration'>{duration}</p>
        </div>
    )
}

export default Song;