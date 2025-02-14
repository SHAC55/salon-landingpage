"use client";
import React from "react";

const testimonials = [
  {
    name: "Neha Jajoo",
    feedback:
      "I got my Balayage from Ahmed Salon Powai. Hands down to the dedication shown by Ahmed and his team. They did not do it just for the sake of doing it but they wanted to look it perfect! They completed the work around 02:00AM at night and were so patient even at that hour. Hats off to you and your team Ahmed. Great work. I’m so happy and satisfied with the colour. Thank you so much! Highly recommended in Mumbai!",
    photo: "/images/john.jpg",
    rating: 5,
  },
  {
    name: "Shweta Sharma",
    feedback:
      "Excellent Work 🤩 Ahmed Ji is very professional, provides the right consultation, gives proper time for the hair treatment, doesn’t rush to finish the work and the results are amazing. The Hair treatment was done by Hussain ji and Salman Ji, very caring and accommodating to the specific needs. Highly recommended!",
    photo: "/images/jane.jpg",
    rating: 5,
  },
  {
    name: "Nirmal Gulati",
    feedback:
      "Recently got Hair Botox Treatment Done. Amazing results as you can see in the pics. Ahmed gave a detailed and proper consultation post checking my hair. The entire staff is very polite and friendly. 😊 Must visit!",
    photo: "/images/mark.jpg",
    rating: 5,
  },
  {
    name: "Nisha NRN",
    feedback:
      "Ahmed has been styling my hair since the last 15 years.. great guy who knows his job & work perfectly - can trust him blindly. Love the hospitality. I have been doing my hairstyling, coloring, mani-pedi..... always loved the end result..",
    photo: "/images/emily.jpg",
    rating: 4,
  },
  {
    name: "Smita Jain",
    feedback:
      "Located inside Galleria Mall at Powai Hiranandani. Staff is polite and service is good. I have done hair spa and haircut, and it was totally worth it. Javed did a really good job in giving service!",
    photo: "/images/emily.jpg",
    rating: 4,
  },
  {
    name: "Rashmi Mishra",
    feedback:
      "I tried hair treatment, haircut, facial, and pedicure at Ahmed's salon. Salon's service was excellent. Even after moving to Canada, I made a point to visit his salon during my trips to India. It's renovated now, focusing on clients' needs with attention to small details. Ahmed's advice for the services is genuine, and personally, he's a very good human being. Interestingly, I paid after 2 days, but he didn’t even call for that.",
    photo: "/images/emily.jpg",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="bg-zinc-900 py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-white mb-2">
          What Our Clients Say
        </h2>
        <div className="flex justify-center items-center gap-2 text-yellow-500">
          <span className="text-2xl font-bold">4.3</span>
          <span className="text-xl">★</span>
          <p className="text-sm text-gray-300">(Google Rating)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ name, feedback, photo, rating }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center relative"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-3xl ${
                    i < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic mb-4">"{feedback}"</p>
            <h3 className="text-lg font-medium text-gray-800">- {name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
