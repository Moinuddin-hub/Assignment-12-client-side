import { Link } from "react-router-dom";

const Story = ({ item }) => {
//   console.log(item);
  const { _id, image, name } = item;
  return (
    <>
      <div className="">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl w-72 h-72" />
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <Link to={`/detailStory/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </>
  );
};

export default Story;
