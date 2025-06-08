// components/Card.js
const BlogCard = ({ post }) => (
  <div className="Blogcard">
    <img src={post.image} alt={post.title} className="BlogcardImg"/>
    <div className="category">{post.category}</div>
    <h3>{post.title}</h3>
    <p>{post.description}</p>
  </div>
);
export default BlogCard;
