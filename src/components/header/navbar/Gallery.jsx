import { useLoaderData } from "react-router-dom";

const Gallery = () => {
  const servicesData = useLoaderData();
  return (
    <div className=" px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black">
        Our Photo Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {servicesData.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            className="h-52 w-full rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
