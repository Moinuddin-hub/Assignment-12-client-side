

const Contact = () => {
    return (
        <div>
              <div className=" bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone:</span>
          </label>
          <input type="number" placeholder="Number" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
         <textarea name="area" id="" cols="30" rows="10"></textarea>
       
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;