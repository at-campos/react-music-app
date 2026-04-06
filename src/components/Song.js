import cover from './disc.svg';
import add from './plus-circle.svg';
import remove from './trash.svg'

const Song = ({ id, title, artist, duration, addButton, setHandler} ) => {

    const AddDeleteBtn = (buttonCheck) => {
        function handleClickAdd() {
            setHandler(id);
        }

        function handleClickDelete() {
            alert("Feature a desarrollar");
        }
        if(buttonCheck.buttonCheck === true){
            return <button className='songCard__Btn-add' onClick={handleClickAdd}><img src={add} /></button>;
        } else {
            return <button className='songCard__Btn-remove' onClick={handleClickDelete}><img src={remove} /></button>;
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