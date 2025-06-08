import '../About/about.css'
import './HomeCSS.css'

export default function HomeTestimonialCard({img, name, CTC}){
    return(
        <div className='StudentCardComponent-Outer HomeTestimonialCard-outer'>
            <div className='layer1'>
                <div className='l1part1'><img src={img} alt='' /></div>
                <div className='l1part2'>
                    <div className='l12a'>{name} </div>
                    <div className='l12b'>CTC: {CTC}LPA</div>
                </div>
            </div>
        </div>
    )
}