import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsStory = () => {
  const { _id } = useParams();
  console.log(_id);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://assignment-12-server-opal-seven.vercel.app/story/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  }, [_id]);

  console.log(detail);
  if (loading) {
    return <h2 className="">Loading</h2>;
  }
  const [{image,name,location,description,title}]=detail;
  return (
    <>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="py-6">
          {description}
          </p>
          <p className="font-bold">Location:{location}</p>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </>
  );
};

export default DetailsStory;
