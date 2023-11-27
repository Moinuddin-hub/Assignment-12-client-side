import { Link } from 'react-router-dom';
const Cards = ({ card }) => {
  const { _id, image, type, title, price } = card;

  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="w-full h-80" />
        </figure>
        <div className="-mt-8 flex justify-end">
          <h2 className="text-2xl font-bold  bg-slate-900 text-white">
            {price}
          </h2>
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{type}</h2>
          <h2 className="text-xl font-bold ">{title}</h2>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`} ><button className="btn btn-primary">View</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
