import './about.css'

export default function RowSection1({num,det}){
    return(
        <div className="rowSec-wrapper">
            <div className='number'>{num}</div>
            <div className='details'>{det} </div>
        </div>
    );
}