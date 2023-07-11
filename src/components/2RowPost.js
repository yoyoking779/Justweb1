import './2RowPost.css';

function Row2Post(props) {
    const {districx, onBgClick} = props
    return (
        <div className="Row2post">
            <div className="Row2-post-bg" onClick={onBgClick}/>
            <div className="Row2-post-content">
                <img src={districx.thumbnailUrl}/>
                <h4>{districx.title}</h4>
            </div>
        </div>
    );
}

export default Row2Post;