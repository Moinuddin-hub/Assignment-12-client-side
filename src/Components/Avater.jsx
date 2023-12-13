
import useAuth from "../Hook/useAuth";

const Avater = () => {
  const { user } = useAuth();

  return (
    <div className="dropdown dropdown-end flex items-center gap-4">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
        {user.photoURL ? (
          <div className="w-10 rounded-full">
            <img loading={"lazy"} src={user.photoURL} />
          </div>
        ) : (
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">
              {(user.displayName && user.displayName[0].toUpperCase()) || "#"}
            </span>
          </div>
        )}
      </div>

      <div className="hidden lg:block text-base">
        {user?.displayName && user.displayName.toUpperCase()}
      </div>

  
    </div>
  );
};

export default Avater;