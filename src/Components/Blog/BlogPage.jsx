import './blog.css'
import BlogCategory from './BlogCategory'
import BlogLayer1 from './BlogLayer1'
import BlogL2 from './BlogLayer2'


export default function BlogPage(){
    return(
        <>
            <BlogLayer1 />
            <BlogL2 />
            <BlogCategory />
        </>
    )
}