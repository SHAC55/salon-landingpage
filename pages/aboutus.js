import React from 'react';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 p-12 mt-8 rounded-xl shadow-2xl bg-zinc-900 overflow-hidden max-h-[1100px]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-40 -z-10"></div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-bold text-white mb-8">Discover Our Story</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Established in 2017, Ahmed Salon has been a beacon of excellence in the beauty industry. Over the years, we have built a reputation for delivering unmatched quality and service, earning the trust and loyalty of our clients. Partnered with world-renowned product lines such as Biotop, L'Oréal, Nashi, Dione, and Matrix, we ensure that every treatment we offer is backed by the finest products available globally. 
          <br /><br />
          Our team of over 15 seasoned professionals is dedicated to crafting personalized experiences for every client, from trendy haircuts and color transformations to luxurious skincare routines. The salon's founder, with an impressive 25+ years of expertise, has instilled a culture of excellence, passion, and continuous learning among the team, setting new benchmarks in the industry.
          <br /><br />
          To date, Ahmed Salon has proudly served an astounding 4-5 lakh satisfied customers, each leaving with a renewed sense of confidence and style. Our unwavering commitment to innovation and client satisfaction has made us a preferred destination for those seeking premium beauty solutions. At Ahmed Salon, we don't just offer services; we create an environment where clients feel cherished, rejuvenated, and inspired to embrace their unique beauty.
        </p>
        <a href="tel:+919876543210">
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          Book an Appointment
        </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="rounded-xl overflow-hidden hidden md:flex shadow-lg transform hover:scale-105 transition-transform">
          <Image
            src="/images/saloninside.jpg"
            alt="Inside a salon"
            height={350}
            width={550}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
