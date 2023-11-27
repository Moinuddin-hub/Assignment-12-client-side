import { useLoaderData } from "react-router-dom";

const Details = () => {
  const item = useLoaderData();
  console.log(item);

  const [{ image, type, title, price, description, location }] = item;

  return (
    <>
      <h2 className="text-3xl text-center font-bold mt-4 py-4">{location}</h2>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="py-6 text-2xl font-bold">{price}</p>

            <button className="btn btn-primary">contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
