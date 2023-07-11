import './Appsearch.css';
function Appsearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className="app-search">
            <input 
                className="app-search-input"
                type="text"
                placeholder="finding ?"
                value={value}
                onChange={(event) => {onValueChange(event.target.value)}}
            />
        </div>
    );
}

export default Appsearch;
