import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import usePackage from "../Hook/useCart";
const AddCart = () => {
    const axiosSecure=useAxiosSecure();
    // const [,refetch]=usePackage();
    const {user}=useAuth()
    const AddPackage=(e)=>{
       e.preventDefault();
       const image=e.target.image.value;
       const type=e.target.type.value;
       const title=e.target.title.value;
       const name=e.target.price.value;
       const item={image,type,title,name} 
        console.log(item);
 if(user && user?.email){
        axiosSecure.post("/package", item).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title:"cart added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            //   refetch();
            }
          });
        }
          else {
            Swal.fire({
              title: "please login",
              text: "Please login and add to cart!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes,login!",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login", { state: { from: location } });
              }
            });
          }
    }
   
  
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-4">Add package</h2> 
       
   
      <form  onSubmit={AddPackage} className="">
      <div className=" w-1/2 mx-auto mt-4 h-80 border-4">
           <div className="flex justify-center gap-4">
           <div className="">
       <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Image</span>
          </label>
          <input type="text" name='image' placeholder="provide image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Type</span>
          </label>
          <input type="text" name="type" placeholder="write type" className="input input-bordered" required />
        </div>
       </div>

     <div className="">
     <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">title</span>
          </label>
          <input type="text" name="title" placeholder="write title" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">price</span>
          </label>
          <input type="number" name="price" placeholder="write price" className="input input-bordered" required />
        </div>
     </div>
           </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Add Package</button>
        </div>
        </div>
      </form>
    
        </div>
    );
};

export default AddCart;