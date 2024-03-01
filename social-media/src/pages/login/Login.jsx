import "./login.scss"

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea animi repellendus minus incidunt. Atque adipisci error sunt voluptate fugiat culpa suscipit delectus numquam, minus voluptates sit cupiditate quasi nam id!</p>
            <span>Don't you have an account?</span>
            <button>Register</button>
        </div>

        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}
