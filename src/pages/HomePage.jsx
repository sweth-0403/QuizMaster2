import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard">
        {[1, 2, 3, 4, 5, 6].map((sem) => (
          <button
            key={sem}
            className="dashboard-box"
            onClick={() => navigate("/topics")}
          >
            Semester {sem}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
