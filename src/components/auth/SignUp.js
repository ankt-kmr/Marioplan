import { useForm } from "react-hook-form";

function SignUp() {
    // const [state, setstate] = useState({
    //     email: "",
    //     password: "",
    //     firstName: "",
    //     lastName: ""
    // });

    // const handleChange = (e) => {
    //     setstate({
    //         [e.target.id]: (e.target.value)
    //     })
    // }
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(state);
    // }

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data, e);
    }

        return(
            <div className="continer">
                <form onSubmit={handleSubmit(onSubmit,)} className='white'>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input {...register("firstname", { required: true })} type="text" id="firstName" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input {...register("lastname", { required: true })} type="text" id="lastName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} type="email" id="email" />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input {...register("password", { required: true })} type="password" id="password" />
                    </div>

                    <div className="input-field">
                        <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
}

export default SignUp;