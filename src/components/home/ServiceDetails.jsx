import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const servicesData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const item = servicesData.find((item) => item.id === idInt);

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[40vh] md:h-[80vh] rounded"
      />
      <div className="mt-5 space-y-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">{item.name}</h1>
          <p className="font-bold text-2xl">{item.price}</p>
        </div>
        <div className="text-justify">
          <h2 className="font-bold text-xl">Overview:</h2>
          <p className="pl-5">{item.details_description.overview}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl">Facilities:</h2>
          <ul className="list-disc">
            <li className="ml-10">{item.details_description.facilities[0]}</li>
            <li className="ml-10">{item.details_description.facilities[1]}</li>
            <li className="ml-10">{item.details_description.facilities[2]}</li>
            <li className="ml-10">{item.details_description.facilities[3]}</li>
            <li className="ml-10">{item.details_description.facilities[4]}</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <button className="px-10 py-3 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded uppercase text-white font-medium mt-10">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
