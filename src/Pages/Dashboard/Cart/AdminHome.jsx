import useAuth from "../../../Hook/useAuth";


const AdminHome = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                  user?.disPlayName? user.disPlayName:'Back'
                }
            </h2>
        </div>
    );
};

export default AdminHome;
