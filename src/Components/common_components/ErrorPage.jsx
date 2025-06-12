import { Link } from 'react-router-dom';
import "../CSS/main.css"
export default function ErrorPage() {
  return (
    <div className="ErrorPage-wrapper">
      <div className="error-title">OOPS!!</div>
      <div className="error-image">
        <img src="/images/ErrorPage.png" alt="Error Illustration" />
      </div>
      <div className="error-message">Page Not Found</div>

      <div className="error-buttons">
        <Link to="/" className="error-link">Go To Home</Link>
        <Link to="/contact" className="error-link">Contact Us</Link>
      </div>
    </div>
  );
}
