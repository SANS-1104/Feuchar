import './about.css'

export default function AboutSubCardComp({title, desc}){
    return(
        <div className="AboutSubCardCompTitle-Wrapper">
            <div className='AboutSubCardCompTitle'>{title} </div>
            <div className='AboutSubCardCompDesc'>{desc} </div>
        </div>
    );
}