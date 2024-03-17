

const Community = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold lg:text-center">Community Tour Guide</h2>
            <div className=" grid mx-4 grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                <div className="">
                    <img src="https://i.ibb.co/BsLHDQH/doubledeckbus.webp" alt="" />
                    <h2 className="text-2xl font-bold">Community Tour Guide</h2>
                    <p className="">Earn money by taking people for a walk on the local side</p>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/B2F3nSR/Travel.webp" alt="" />
                    <h2 className="text-2xl font-bold">Travel Agent</h2>
                    <p className="">It's a high-flying business that's experiencing a rebirth.</p>
                </div>
                <div className="">
                    <img src="https://i.ibb.co/bjhtJFM/cruiseship.webp" alt="" />
                    <h2 className="text-2xl font-bold">Cruis Ship Travel agent</h2>
                    <p className="">Help cruisers connect with their perfect vacations.</p>
                </div>

            </div>
        </div>
    );
};

export default Community;