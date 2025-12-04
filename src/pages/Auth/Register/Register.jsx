import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  console.log('in eregister',location);
  
  const {registerUser,updateUserProfile} = useAuth();

  const handleRegistration = (data)=>{
    console.log('agter reguster',data.photo[0]);
    const profileImg = data.photo[0];
    registerUser(data.email,data.password)
    .then(result=>{
        console.log(result.user);
        // store the image and get the photo url
        const formData = new FormData();
        formData.append('image',profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(image_API_URL,formData)
        .then(res=>{
          console.log('after image upload',res.data.data.url);
          const photoURL = res.data.data.url;
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          }
          //1 create user in the database
          const userInfo = {
            email:data.email,
            displayName:data.name,
             photoURL: photoURL,
          }
              axiosSecure.post('/users',userInfo)
              .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                  console.log('user created in the database');
                }
                
              })
          //2 update user profile
          updateUserProfile(userProfile)
          .then(()=>{
              console.log('profile updated');
              navigate(location.state || '/')
          
          })
          .catch(err=>{
            console.log(err);
            
          })
        })
        // update user profile here

    })
    .catch(err=>{
        console.log(err);
        
    })
  }

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
        <h3 className="text-3xl text-center">Welcome To Zap-Shift</h3>
        <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">name</label>
          <input {...register('name',{required:true})} type="text" className="input" placeholder="your name" />
            {
                errors.name?.type ==='required' && <p className="text-red-500">name is required</p>
            }
          {/* photo field */}
          <label className="label">Photo</label>
          <input {...register('photo',{required:true})} type="file" className="file-input" placeholder="Upload photo" />
            {
                errors.photo?.type ==='required' && <p className="text-red-500">photo is required</p>
            }


          {/* email */}
          <label className="label">Email</label>
          <input {...register('email',{required:true})} type="email" className="input" placeholder="Email" />
            {
                errors.email?.type ==='required' && <p className="text-red-500">Email is required</p>
            }
          {/* password */}
          <label className="label">Password</label>
          <input {...register('password',
            {required:true,
            minLength:6,
            pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            })} type="password" className="input" placeholder="Password" />
          <div>
            {
                errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
            }
            {
                errors.password?.type==='minLength' && <p className="text-red-500">Password must be 6 character or longer</p>
            }
            {
                errors.password?.type==='pattern' &&<p className="text-red-500"> password  must have At least one uppercase letter. At least one lowercase letter .At least one number. At least one special character</p>
            }
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
            <p>Already have an account<Link state={location.state} to="/login" className="text-blue-400"> Login</Link></p>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Register;
