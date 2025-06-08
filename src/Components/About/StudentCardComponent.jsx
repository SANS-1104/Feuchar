import './about.css'

export default function StudentCardComponent({img, name, minCTC, maxCTC, tagline,testimonial, about}){
    return(
        <div className='StudentCardComponent-Outer'>
            <div className='layer1'>
                <div className='l1part1'><img src={img} alt='' /></div>
                <div className='l1part2'>
                    <div className='l12a'>{name} </div>
                    <div className='l12b'>CTC: {minCTC}-{maxCTC}LPA</div>
                </div>
                <div className='l1part3'><img src='/images/twitterBird.png' alt=''/></div>
            </div>
            <div className='layer2'><img src='/images/ratingStar.png' alt=''/></div>
            <div className='layer3'>
                <div className="testimonial-Tagline">{tagline} </div>
                <div className="Testimonial">{testimonial} </div>
                <div className="About-stu">{about}</div>
                
            </div>
        </div>
    )
}