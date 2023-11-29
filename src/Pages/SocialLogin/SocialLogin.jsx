
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";
const SocialLogin = () => {
   const axiosPublic=useAxiosPublic();
    const navigate = useNavigate()
    const {  googleLogin} = useAuth();


    const handleSocialLogin = (media) => {
        media()
            .then((result) => {
                toast.success('User logged in successfully');
                const userInfo={
                    email:result.user?.email,
                    name:result.user?.displayName,
                    image:result.user?.photoURL,
                }
                axiosPublic.post('/users',userInfo)
                    .then(res=>{
                        console.log(res.data);
                        navigate('/')
                    })
                
               
            })
            .catch(error => {
                toast.error(error.message)
            })
        }
    return (
        <>
        <div className="divider">continue with</div>
        <div className="flex justify-around">
            <button
                onClick={()=>handleSocialLogin(googleLogin)}
                className="btn btn-primary btn-sm w-full"> <FcGoogle></FcGoogle>Google</button>
           

        </div>
    </>
    );
};

export default SocialLogin;