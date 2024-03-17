const Contact = () => {
  return (
    // <div>
    //   <div className=" bg-red-400 w-full">
    //     <div className="  flex-col ">
    //       <div className=" shrink-0 w-full max-w-sm shadow-2xl  bg-orange-600 mx-auto">
    //         <form className="card-body">
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="name"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               placeholder="email"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Phone:</span>
    //             </label>
    //             <input
    //               type="number"
    //               placeholder="Number"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Message</span>
    //             </label>
    //             <textarea name="area" id="" cols="20" rows="10"></textarea>
    //           </div>

    //           <div className="form-control mt-6">
    //             <button className="btn btn-primary">send Message</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-1/3 ml-4 md:w-1/2 lg:w-full font-serif relative  mt-16 space-y-3   ">
      <div className="flex  lg:w-[1000px]  shadow-2xl p-8 rounded-xl mx-auto dark:bg-gray-900 dark:text-gray-100 bg-slate-300 gap-8">
        <div className=" mx-auto " >
          <h1 className="text-2xl font-bold  text-center">Contact Us</h1>
          <form
            noValidate=""
            action=""
            className="space-y-6 mx-auto"
          >
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400 font-bold">Name</label>
              <input
                type="name"
                name="from_name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400 font-bold">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400 font-bold">
                Our message
              </label>
              {/* <input type="password"  name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" /> */}
              <textarea
                name="message"
                id=""
                cols="65"
                rows="5"
                className="w-full"
              ></textarea>
            </div>
            <input
              type="submit"
              value="send"
              className="block w-full btn btn-primary p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            />
          </form>
        </div>
        {/* <div className="w-[500px] h-[500px]">
           <div className="text-center">
     <h2 className="text-2xl font-bold">Welcome</h2>
   <p>Feel free to reach our with any inquiries <br/>suggestions,or just to say hello, we are<br/>looking forward to hearing from you </p>
     </div>
   <Lottie animationData={contact} className=' w-96 mx-auto'/>
  </div> */}
      </div>
    </div>
  );
};

export default Contact;
