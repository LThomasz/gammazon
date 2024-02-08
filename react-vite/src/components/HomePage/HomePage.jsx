import { useNavigate } from "react-router-dom"
import "./HomePage.css"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-page-container">
      <h1 className="welcome-header">Welcome to Gammazon!</h1>
      <div className="home-page-navigation" onClick={() => navigate('/products')}>
        <button>Click here to view all the products Gammazon has to offer!</button>
      </div>
    </div>
  )
}
