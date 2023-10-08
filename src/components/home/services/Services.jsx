import { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const res = await fetch("/servicesData.json");
      const data = await res.json();
      setServices(data);
    };
    loadServices();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
