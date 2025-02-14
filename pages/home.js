import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <section className="flex justify-center max-h-[800px] p-2 mt-10">
      {/* Left Image */}
      <div>
        <img
          src="https://i.pinimg.com/736x/56/9c/47/569c479dd95c1da9edfa24e2ff26dede.jpg"
          className=" rounded-2xl 2xl:h-[780px] 2xl:w-[450px] xl:h-[600px] xl:w-[350px] lg:h-[480px] lg:w-[320px] md:h-[380px] md:w-[200px] sm:h-[350px] sm:w-[180px] h-[300px] w-[150px]" 
          alt="Left Decorative Image"
        />
      </div>

      {/* Middle Section */}
      <div className="max-h-[800px] flex-1 m-2 flex flex-col max-w-[700px]">
        <div className=" h-1/4 relative">
          <Image
            src="/images/img1.jpg"
            alt="Blue Section Image"
            layout="fill" // Makes the image fill the parent container
            className="object-cover rounded-lg"
          />
        </div>

        <div className=" h-1/2 relative ">
          <Image
            src="/images/salonintro.jpg"
            alt="Red Section Image"
            layout="fill"
            className="object-cover rounded-lg "
          />
        </div>

        <div className="h-1/4 relative">
          <Image
            src="/images/uni.jpg"
            alt="Green Section Image"
            layout="fill"
            className="object-cover rounded-lg "
          />
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img
          src="https://i.pinimg.com/736x/cc/5d/7a/cc5d7adc6b093f8c49669201a22d712c.jpg"
          alt="Right Decorative Image"
          className=" rounded-2xl 2xl:h-[780px] 2xl:w-[450px] xl:h-[600px] xl:w-[350px] lg:h-[480px] lg:w-[320px] md:h-[380px] md:w-[200px] sm:h-[350px] sm:w-[180px] h-[300px] w-[150px]"
        />
      </div>
    </section>
  );
};

export default Home;
