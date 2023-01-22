import { useForm } from "react-hook-form";

function CreateProject() {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data, e);
    }

    return(
        <div className="continer">
            <form onSubmit={handleSubmit(onSubmit,)} className='white'>
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input {...register("title", { required: true })} type="text" id="title" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea {...register("content", { required: true })} className="materialize-textarea" type="textarea" id="content" />
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">LogIn</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;