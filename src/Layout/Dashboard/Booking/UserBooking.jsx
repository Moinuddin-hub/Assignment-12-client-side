import useCart from "../../../Hook/useCart";

const UserBooking = () => {
  const [cart] = useCart();
 
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(cart);
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-8">User all booking</h2>
      <div className="flex justify-around items-center mt-4">
            <h2 className="text-4xl">Items:{cart.length}</h2>
            <h2 className="text-4xl">Total Price:{totalPrice}</h2>
            <button className="btn btn-primary" >Pay</button>
            </div>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl font-bold">No:</th>
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Tour guide Name</th>
              <th className="text-xl font-bold">Tour date</th>
              <th className="text-xl font-bold">Tour price</th>
              <th className="text-xl font-bold">status</th>
            </tr>
          </thead>
          <tbody>{
             cart.map((item,index)=><tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.type} Tour</td>
                <td>Abdul kalam</td>
                <td>24/11/2022</td>
                <td>TK:{item.price}</td>
                <td><button className="btn btn-primary">Accepted</button></td>

             </tr>)
            }</tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBooking;
