import { Link } from "react-router-dom";

const MeetGuide = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mt-4 py-8">Meet Our Tour Guides</h2>

     <div className="">
           <h2 className=""></h2>
           <p className="">We are justifiably proud of our tour guides.
            Each has been chosen for his or her experience, whether as a tour guide, a public speaker or performer, a historian, or as a delightful combination of all the above. Each has been professionally trained to provide our valued guests with a history tour that is factual (as opposed to fantastical) and an experience that is both fun and educational.</p>
      <div className="mx-auto mt-4">
        <Link to="tourGuideProfile">
          <button className="btn btn-primary ">Details</button>
        </Link>
      </div>
      </div>

    </div>
  );
};

export default MeetGuide;
