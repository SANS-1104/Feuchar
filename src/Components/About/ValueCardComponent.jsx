import './about.css'

export default function ValueCardComponent({icon,title,desc}){
    return(
        <div className='ValueCard-outer'>
            <div className='headLayer'>
                <div className='headLa'><img src={icon} alt=''/></div>
                <div className='headLb'>{title} </div>
            </div>
            <div className='descLayer'>{desc} </div>
        </div>
    )
}