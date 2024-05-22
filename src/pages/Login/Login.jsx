import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle ,FaGithub   } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const Login = () => {

    const {signIn,googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then( result =>{
            console.log(result);
            navigate(location?.state ? location.state : '/');
        })
        .catch();
    }

    const handleGoogle =  () =>{
        console.log('goole click');
        googleSignIn()
        .then()
        .then()
    }


  return (

    <div>
        <Helmet>
                <title>Login | Royal Residences</title>
            </Helmet>
      <div>
        <h1 className="text-2xl font-semibold text-center my-8">Please Login With your account</h1>
      </div>
      <div className="w-1/3 mx-auto shadow-2xl p-8 rounded-lg">

        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <div className="flex items-center justify-center  mt-4">
            <p>Dont have any account? <span className="text-blue-600 font-bold"> <Link to="/register">Register</Link></span> </p>
        </div>
        <div className="relative my-6">
            <hr className="border border-gray-300 opacity-50" />
            <p className="text-sm absolute top-1/2 left-1/2 px-2 opacity-85 bg-white -translate-y-1/2 -translate-x-1/2 z-50">or log in with</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <button onClick={handleGoogle} className="btn w-full border border-gray-500 shadow-md"> <FaGoogle></FaGoogle> Google</button>
            <button className="btn w-full border-gray-500 shadow-md"> <FaGithub></FaGithub> Github</button>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
