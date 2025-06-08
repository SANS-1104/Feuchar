import './blog.css'

export default function BlogL2(){
    return(
        <div className='blogL2-outer'>
            <div className='blogL2-inner'>
                <div className='baseImg'><img src='/images/blogLayer2.png' alt='' /></div>
                <div className='overlayImg'>
                    <div className='layer1'>
                        <div className='l1a'><img src='/images/popularchip.png' alt='' /></div>
                        <div className='l1b yc'>April 28, 2025</div>
                    </div>
                    <div className='layer2'>10 Best Design Resources for 2024: After trying 100+ Here are My Top Picks</div>
                    <div className='layer3'>In the ever-evolving world of design, where innovation meets aesthetics, finding the perfect resources to fuel your creative journey can be a rewarding yet daunting ... <span className='yc cr'>Continue reading</span></div>
                    
                </div>
            </div>
        </div>
    )
}