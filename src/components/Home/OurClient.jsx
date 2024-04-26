

const OurClient = () => {
    return (
        <div className="mt-28">
            <h2 className="text-2xl font-bold">Our Clients</h2>
            <div className="mt-5 grid md:grid-cols-5 gap-5">
              <div className="border p-2 text-center w-24">
                <h2 className="text-4xl font-bold font-rancho">Jk</h2>
                <small>Garments</small>
              </div>
              <div className="border p-2 text-center w-24">
                <h2 className="text-2xl font-bold font-rancho">Diamond</h2>
                <small>Cotton Ltd</small>
              </div>
              <div className="border p-2 text-center w-24">
                <h2 className="text-2xl font-bold font-rancho">Jara</h2>
                <small>Fashion House</small>
              </div>
              <div className="border p-2 text-center w-24">
                <h2 className="text-2xl font-bold font-rancho">Fk</h2>
                <small>Furniture PLC.</small>
              </div>
            </div>
        </div>
    );
};

export default OurClient;