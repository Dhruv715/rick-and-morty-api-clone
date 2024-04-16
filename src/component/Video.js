import './Video.css';
function Video({url,name,location,status,seen}){
    return(
        <>
        <div className="boxss" >
            <img src={url} alt="" />
            <div className='textare'>
                <span className='heading'>{name}</span>
                <span className='locations'>{status}</span>
                <span className='Last'>Last Known location: </span>
                <span className='Locationss'>{location}</span>
                <span className='seen1'>First seen in:</span>
                <span className='seen'>{seen}</span>
             </div>
        </div>
        
        </>
    );
}
export default Video