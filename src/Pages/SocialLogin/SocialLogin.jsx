
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
const SocialLogin = () => {

    const navigate = useNavigate()
    const {  googleLogin} = useAuth();


    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                toast.success('User logged in successfully');
                navigate('/')
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