import { Link } from "react-router-dom";

const SignUp = () => {


    const handleSignUp = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

    };


    return (
        <div>


            <div className="hero bg-base-200 min-h-screen mt-[-94px]">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#bd0021]">Sign Up Now !</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <h1>Already have an account ! <Link to='/login' className="underline text-[#bd0021]">Login</Link> </h1>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline hover:bg-[#bd0021] text-[#bd0021] hover:border-none ">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignUp;