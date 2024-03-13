import { Link } from 'react-router-dom';


const Items = (props) => {
    const title = props.title;
    const id = props.id;
    const url = props.to;

return (
    <div className={'Items-to-do'}>
        <div className='left-side'>
            <Link to={url} className={'todo name'}>{title}</Link>
        </div>
        <div className='right-side'>
            <button className={'remove'}>X</button>
        </div>
    </div>
    );
};

export default Items;
