import { useForm } from "react-hook-form";

function SignIn() {
    // const [state, setstate] = useState({
    //     email: "",
    //     password: ""
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
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} type="email" id="email" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input {...register("password", { required: true })} type="password" id="password" />
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">LogIn</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;