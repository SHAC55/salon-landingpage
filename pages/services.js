const servicesData = [
  {
    img: '/images/hair.jpg',
    head: 'HAIR',
    desc: 'Experience premium hair styling and treatments.',
  },
  {
    img: '/images/skin.jpg',
    head: 'SKIN',
    desc: 'Rejuvenate your skin with our expert care.',
  },
  {
    img: '/images/makeup.jpg',
    head: 'MAKEUP',
    desc: 'Look stunning with professional makeup services.',
  },
  {
    img: '/images/eye.jpg',
    head: 'EYES',
    desc: 'Enhance your eyes with bold, stunning looks.',
  },
  {
    img: '/images/nail.jpg',
    head: 'NAIL ART',
    desc: 'Get creative and trendy nail designs.',
  },
  {
    img: '/images/wedding.jpg', // Add the image for Weddings & Events
    head: 'WEDDINGS & EVENTS',
    desc: 'Make your special occasion unforgettable with our premium services tailored for weddings and events.',
  },
];

const Services = () => {
  return (
    <div className="py-8 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Service Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Our Premium Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore a wide range of personalized beauty services crafted to perfection.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-md shadow-lg hover:scale-105 transform transition">
            Explore All Services
          </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300"
          >
            <div className="relative">
              <img
                src={service.img}
                alt={service.head}
                className="w-full h-56 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg font-bold transition duration-300">
                {service.desc}
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-2xl font-semibold text-gray-800">
                {service.head}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
              <div className="mt-4">
                {/* <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
