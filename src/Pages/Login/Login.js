import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero pt-32">
            <div className="hero-content w-full max-w-[450px] flex-col lg:flex-row-reverse">
                <div className="card rounded flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-semibold text-center'>Please Login</h2>
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered focus:outline-none border-[#3282AD] rounded" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered focus:outline-none border-[#3282AD] rounded" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded bg-white text-[#3282AD] border-[#3282AD] hover:border-0 hover:bg-[#3282AD] hover:text-white">Login</button>
                            </div>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="form-control ">
                            <button className="btn rounded bg-white text-[#3282AD] border-[#3282AD] hover:border-0 hover:bg-[#3282AD] hover:text-white">Login With Google</button>
                        </div>

                        <div className='flex items-center justify-between py-3'>
                            <span>Create an account</span>
                            <Link to='/signup' className='hover:text-red-400'>Please SignUp</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;