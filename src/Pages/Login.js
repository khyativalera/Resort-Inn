import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
      <div>
          <Header/>

          <main><br/><br/>
    <div className="login-form container col-md-3 center" >
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
        </div>        
    </form>
    <p className="text-center"><Link to="SignUp">Create an Account</Link></p><br/><br/>
</div><br/><br/><br/>
</main>
<Footer/>
</div>
  )
}

export default Login