import { Map, Marker } from "pigeon-maps";
import { Helmet } from "react-helmet-async";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 pt-10">
      <Helmet>
        <title>EventEdu | Contact</title>
      </Helmet>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
        Contact With Us
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-5">
        <div className="flex-1 w-full space-y-10">
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <BsFillTelephoneFill className="text-2xl text-red-500" />
            <div className="">
              <p>+880 1406680846</p>
              <p>+880 1644336343</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <AiFillMail className="text-2xl text-red-500" />
            <div className="">
              <p>shamshul.haque.dev@gmail.com</p>
              <p>shamshul.haque21@gmail.com</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded p-10 flex items-center gap-5">
            <GoLocation className="text-2xl text-red-500" />
            <div className="">
              <p>
                Cultural Centre <br />
                Road 9, Mirpur DOHS <br /> Dhaka 1216, Bangladesh
              </p>
            </div>
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
                    rows="8"
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
      <div className="pt-10">
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
