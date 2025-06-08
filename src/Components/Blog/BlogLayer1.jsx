import './blog.css'
import SearchBar from './SearchBar'



export default function BlogLayer1(){
    return(
        <div className='BlogL1-Outer'>
            <div className='BlogL1-Inner'>
                <div className='title1'>Our Blog</div>
                <div className='title2'>The Latest Updates, Ideas, <br></br>and Perspectives</div>
                <SearchBar />
            </div>
        </div>
    )
}