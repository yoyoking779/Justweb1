import './Image-distric.css';



function ImagesDistric(props) {
    const { distric, onDistricclick } = props;
    return (
        <div className="image-distric">
            <img src={distric.thumbnailUrl} onClick={() => {onDistricclick(distric)}}/>
            <h>{distric.title}</h>
        </div>

    );
}
export default ImagesDistric;