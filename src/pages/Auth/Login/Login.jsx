import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

const email = watch('email');

  const {signInUser,forgetPassword} = useAuth();
const location = useLocation();
const navigate = useNavigate();
console.log(location);

const handleLogin = (data)=>{
    console.log('login data :',data);
    signInUser(data.email,data.password)
    .then(result=>{
        console.log(result.user);
        navigate(location.state || '/');
    })
    .catch(err=>{
        console.log(err);  
    })

}


const handleForgetPassword = ()=>{

console.log(email);
forgetPassword(email)
.then(()=>{
  console.log('reset mail  has been send to ',email);
  
})
.catch(err=>{
  console.log(err);
  
})


}

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <p className="text-center">Please Login</p>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input   {...register('email',{required:true})} type="email" className="input" placeholder="Email" />
            {
                errors.email?.type ==='required' && <p className="text-red-500">Email is required</p>
            }

          {/* password */}
          <label className="label">Password</label>
          <input {...register('password',{required:true,minLength:6})} type="password" className="input" placeholder="Password" />

          {
            errors.password?.type ==='minLength' && <p className="text-red-500">password must be 6 character long</p>
          }

          <div>



            <a  onClick={handleForgetPassword} className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to zap-shift<Link state={location.state} to="/register" className="text-blue-400"> Register</Link></p>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
