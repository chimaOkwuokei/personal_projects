import "./register.scss"
import { Link } from "react-router-dom" //use for routing pages.

export default function Register() {
  return (
    <div className="register">
      <div className="card">

        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>

        <div className="right">
          <h1>Chima Okwuokei.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea animi repellendus minus incidunt. Atque adipisci error sunt voluptate fugiat culpa suscipit delectus numquam, minus voluptates sit cupiditate quasi nam id!</p>
          <span>Don't you have an account?</span>

          <Link to="/login">
            <button>Login</button>
          </Link>

        </div>


      </div>
    </div>
  )
}
