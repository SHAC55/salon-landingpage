import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white pt-12 p-10 border-t border-gray-700 shadow-inner">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h1 className="font-semibold text-lg text-zinc-400 mb-3">Address:</h1>
          <p className="text-base text-white font-semibold leading-relaxed">
            Shop no. 69, Galleria Shopping Centre, Hiranandani Powai, Mumbai - 4000076, Maharashtra
          </p>
          <a
            href="https://www.google.com/maps/dir//Ahmed+Hair+%26+Beauty+Studio-best+salon-Hair+Treatment-Nail+Studio-Bridal+Makeup+Studio+In+Powai,+Shop+no+69+Galleria+shopping+centre+Hiranandani+Powai+Mumbai+-4000076,+Mumbai,+Maharashtra+400076/@19.1193826,72.9091694,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c7e8720b0477:0xbe3e5863d7f88aab!2m2!1d72.9117443!2d19.1193826?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-base font-semibold text-black bg-white px-4 py-2 rounded-md shadow-md hover:bg-zinc-700 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/535/535188.png"
              alt="Get Directions Icon"
              className="w-5 h-5 mr-2"
            />
            Get Directions
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-zinc-400 mb-3">Connect with Us</h3>
          <div className="flex gap-6 mb-4">
            <a
              href="https://wa.me/9867831222" target='_blank'
              className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/13051/13051741.png"
                alt="Icon 1"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/ahmed.salon.powai/?igsh=MW05bHR2d3d3YjB4Zg%3D%3D" target='_blank'
              className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                alt="Icon 2"
                className="w-10 h-10"
              />
            </a>
            {/* <a
              href="#"
              className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/3938/3938037.png"
                alt="Icon 3"
                className="w-10 h-10"
              />
            </a> */}
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <p className="text-base text-white font-semibold leading-relaxed">
            Ahmed Hair & Beauty Studio offers premium salon services with a focus on quality, customer satisfaction, and modern trends. From hairstyling to bridal makeup, our team ensures a world-class experience.
          </p>

          {/* Call Us Section */}
          {/* <div className="mt-1 flex ">
            <h3 className="text-lg font-semibold text-zinc-400 ">Call Us</h3>
            <a
              href="tel:+919876543210"
              className=" items-center text-base font-semibold mt-1 px-2 rounded-md hover:bg-zinc-700 transition"
            >
            </a>
          </div> */}
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-zinc-500 border-t border-zinc-700 pt-4">
        © {new Date().getFullYear()} Ahmed Hair & Beauty Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
