import useAuth from "../../../Hook/useAuth";


const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2 className="text-2xl">
                <span>Hi,Welcome</span>
                {
                    
                user?.disPlayName? user.disPlayName:'Back'
                      
                }
            </h2>
        </div>
    );
};

export default UserHome;