import './about.css'


export default function FAQCardComponent({question, answer}){
    return(
        <div className='StudentCardComponent-Outer FAQCardComponent-Outer'>
            <div className='layer1'>{question} </div>
            <div className='layer3'>{answer} </div>
        </div>
    )

}