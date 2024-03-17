import { useLoaderData } from "react-router-dom";
import AllCards from "./AllCards";

const Packages = () => {
    const card=useLoaderData();
   
    return (
        <div className="grid grid-cols-3 mt-4">
        {
          card?.map(card=><AllCards key={card._id} card={card}></AllCards>)
        }
      </div>
    );
};

export default Packages;