import React from 'react';
import '../assets/css/SignUp.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
      <div>
          <Header/>
          <main>
    <div className="containerSignUp">
		<div className="row">
			<div className="panel panel-primary">
				<div className="panel-body">
					<form method="POST" action="#" role="form">
						<div className="form-group">
							<h2>Create account</h2>
						</div>
						<div className="form-group">
							<label className="control-label" for="firstName">First name</label>
							<input id="firstName" type="text"  className="form-control" required/>
						</div>
                        <div className="form-group">
							<label className="control-label" for="lastName">Last name</label>
							<input id="lastName" type="text" className="form-control" required/>
						</div>
						<div className="form-group">
							<label className="control-label" for="signupEmail">Email</label>
							<input id="signupEmail" type="email" className="form-control" required/>
						</div>
						<div className="form-group">
							<label className="control-label" for="signupPassword">Password</label>
							<input id="signupPassword" type="password" className="form-control" placeholder="at least 6 characters" required/>
						</div>
                        <div class="form-check form-group">
                        <input class="form-check-input" type="checkbox" value="" id="signedIn"/>
                        <label class="form-check-label control-label" for="signedIn">
                            Keep me signed in
                        </label>
                        </div>
                        <div class="form-check form-group">
                        <input class="form-check-input" type="checkbox" value="" id="subscribe"/>
                        <label class="form-check-label control-label" for="subscribe">
                            Email me exclusive offers, coupouns and travel information
                        </label>
                        </div><br/>
						<div className="form-group">
							<button id="signupSubmit" type="submit" className="btn btn-info btn-block">Create your account</button>
						</div>
						<p className="form-group">By creating an account, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
						<hr/>
						<p>Already have an account? <Link to="Login">Sign in</Link></p>
					</form>
				</div>
			</div>
		</div>
	</div>
    </main>
    <Footer/>
    </div>

  )
}

export default SignUp