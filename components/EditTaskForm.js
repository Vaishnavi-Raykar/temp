export default function EditTaskForm() {
    return (<form className="flex flex-col mt-12 gap-3">
    <input 
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Project name"
    />

    <input 
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Project Description"
    />

    <input 
    className="border border-slate-500 px-8 py-2"
    type="text"
    placeholder="Github Link"
    />

    <button className="bg-blue-800 font-bold text-white py-3 px-6 w-fit">Update Task</button>
</form>
) ;
}