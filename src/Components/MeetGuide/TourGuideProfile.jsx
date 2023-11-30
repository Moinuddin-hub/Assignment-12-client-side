const TourGuideProfile = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-4">
        Tour guide Profile
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <h2 className="text-2xl font-bold">#</h2>
              </th>
              <th className="text-2xl font-bold">Picture</th>
              <th className="text-2xl font-bold">Name</th>
              <th className="text-2xl font-bold">Contact</th>
              <th className="text-2xl font-bold">Eduction</th>
              <th className="text-2xl font-bold">skill</th>
              <th className="text-2xl font-bold">Work Experience</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <h2 className="">1</h2>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/xHT2Y1f/OIP-2.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
              
                </div>
              </td>
              <td>
                 Daniel 
               
                
              </td>
              <td>daniel022@gamil.com</td>
              <th>
              BSC
              </th>
              <td>Web developer</td>
              <td>8+ years</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/ZYvZ9Hh/photo-1592009309602-1dde752490ae.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
            
                </div>
              </td>
              <td>
                Carroll 
              </td>
              <td>carroll035@gmail.com</td>
              <th>
                MSC
              </th>
              <td>Web designer</td>
              <td>5+ years</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
              3
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/rmW19ng/OIP-1.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
             
                </div>
              </td>
              <td>
                Schoen
              </td>
              <td>Crimson036@gmail.com</td>
              <th>BSC</th>
              <td>Software Engineer</td>
              <td>3+ years</td>
            </tr>
            {/* row 4 */}
          
          </tbody>
    
        </table>
      </div>
    </div>
  );
};

export default TourGuideProfile;
