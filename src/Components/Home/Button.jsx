import './HomeCSS.css'

export default function Button({data,onclk}){
    return(
        <div className="BookBtn">
            <button className="home-btn" onClick={onclk}>{data}</button>
        </div>
    )
}