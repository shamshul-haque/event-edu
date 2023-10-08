import { Map, Marker } from "pigeon-maps";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 w-full space-y-10">
          <div className="bg-white shadow-lg rounded p-10">
            <div className="flex gap-3">
              <BsFillTelephoneFill className="text-4xl text-red-500" />
              <h2 className="text-2xl font-bold uppercase">Phone</h2>
            </div>
            <p className="pl-14 pt-3">+880 1406680846</p>
            <p className="pl-14 pt-3">+880 1644336343</p>
          </div>
          <div className="bg-white shadow-lg rounded p-10">
            <div className="flex  gap-2">
              <AiFillMail className="text-4xl text-red-500" />
              <h2 className="text-2xl font-bold uppercase">Phone</h2>
            </div>
            <p className="pl-14 pt-3">+880 1406680846</p>
            <p className="pl-14 pt-3">+880 1644336343</p>
          </div>
        </div>
        <div className="flex-1 w-full bg-white shadow-lg rounded">
          <div className="flex flex-col items-center">
            <div className="w-full border rounded p-5">
              <h1 className="text-2xl font-bold text-center uppercase">
                Write Your Message
              </h1>
              <form className="mt-5 space-y-5">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="outline-0 border p-2 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="outline-0 border p-2 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    cols="20"
                    rows="5"
                    placeholder="Write Message"
                    className="outline-0 border p-2 rounded"
                  ></textarea>
                </div>
                <div className="form-control w-20">
                  <button className="bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 p-2 rounded uppercase text-white font-medium">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <Map
          height={300}
          defaultCenter={[23.82235, 90.365417]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[23.82235, 90.365417]} />
        </Map>
      </div>
    </div>
  );
};

export default Contact;
