// components/BlogPagination.js
const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="BlogPagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        ⟵ Previous
      </button>
      {[...Array(totalPages).keys()].map(n => (
        <button
          key={n + 1}
          onClick={() => onPageChange(n + 1)}
          className={currentPage === n + 1 ? "active" : ""}
        >
          {n + 1}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next ⟶
      </button>
    </div>
  );
};
export default BlogPagination;
