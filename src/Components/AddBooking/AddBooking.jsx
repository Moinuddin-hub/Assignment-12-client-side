import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
// import { axiosSecure } from "../../Hook/useAxiosSecure";

const image_hosting_key=import.meta.env. VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddBooking = () => {
    const { register, handleSubmit,reset} = useForm();
    const axiosPublic=useAxiosPublic();
    const axiosSecure=useAxiosSecure();
    const onSubmit= async(data)=>{
        // console.log(data);
        const imageFile={image:data.image[0]}
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-type':'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem={
                name:data.name,
                category:data.category,
                price:parseInt(data.price),
                date:data.date,
                email:data.email,
                image:res.data.data.display_url
            }
            const menuRs=await axiosSecure.post('/booking',menuItem);
            console.log(menuRs.data)
            if(menuRs.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url',res.data);
    }
    return (
        <div>
             <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
        

          <div className="form-control w-full py-6 ">
            <label className="label">
              <span className="label-text">Tourist Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name here"
              {...register('name',{ required: true})}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full py-6">
              <label className="label">
                <span className="label-text">Tour guide Name*</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="daniel">Daniel</option>
                <option value="carroll">Carroll</option>
                <option value="kalam">Kalam</option>
                
              </select>
            </div>

            <div className="form-control w-full py-6 ">
              <label className="label">
                <span className="label-text">Tour Date*</span>
              </label>
              <input
                type="date"
                placeholder="Date here"
                {...register('date',{ required: true})}
                className="input input-bordered w-full"
              />
            </div>

          </div>
      <div className="flex gap-6">
      <div className="form-control w-full py-6 ">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Email here"
                {...register('email',{ required: true})}
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full py-6 ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="price here"
                {...register('price',{ required: true})}
                className="input input-bordered w-full"
              />
            </div>
      </div>
        

          <div className="mt-4">
          <input type="file"
              {...register('image',{ required: true})}
          className="file-input w-full max-w-xs" />
          </div>
            <button className="btn btn-neutral mt-8">
                Now Book <FaUtensils></FaUtensils></button>
        </form>
      </div>
        </div>
    );
};

export default AddBooking;