// components/FilterBar.js
const categories = ["All", "Popular", "UI/UX design", "Graphic design", "Branding", "Typography", "3D", "Illustration", "Animation"];

const BlogFilterBar = ({ selected, setSelected }) => (
  <div className="filter-bar">
    {categories.map((cat) => (
      <span
        key={cat}
        onClick={() => setSelected(cat)}
        className={selected === cat ? "active" : ""}
      >
        {cat}
      </span>
    ))}
  </div>
);
export default BlogFilterBar;
