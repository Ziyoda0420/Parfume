import React from "react";
import bg1 from "../assets/bg1.png";
import s1 from "../assets/1.jpg";
import s2 from "../assets/2.jpg";
import s3 from "../assets/3.jpg";
import s4 from "../assets/4.png";
import s5 from "../assets/5.jpg";
import s6 from "../assets/6.jpg";

export default function Services() {
  return (
    <div className="bg-black text-white font-sans">
      <section
        className="relative bg-cover bg-center py-28 text-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <p className="text-gray-300 leading-relaxed">
            At Local Face, we are dedicated to providing you with a delightful
            and immersive perfume shopping experience. Our services are tailored
            to ensure that you find the perfect fragrance that complements your
            unique personality and style. We take pride in offering a range of
            services that go beyond just selling perfumes, aiming to make your
            journey with us truly special.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">01.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Personal Fragrance Consultations
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Choosing the right fragrance can be a deeply personal experience.
              Our team of knowledgeable fragrance experts is here to guide you
              through this process. Whether you’re looking for a signature
              scent, a gift for a loved one, or need assistance in exploring new
              fragrance families, our consultants will take the time to
              understand your preferences and suggest the perfect matches.
            </p>
          </div>
          <div>
            <img
              src={s1}
              alt="Fragrance Consultation"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={s2}
              alt="Custom Fragrance"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">02.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Custom Fragrance Creation
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Experience the art of bespoke perfumery with our custom fragrance
              creation service. Work closely with our skilled perfumers to craft
              a scent that is uniquely yours. From selecting individual notes to
              blending harmonious symphonies, we’ll help bring your fragrance
              vision to life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">03.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Scented Gift Selection
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Looking for a meaningful gift that leaves a lasting impression?
              Our scented gift selection service is designed to help you find
              the perfect fragrance gift for any occasion.
            </p>
          </div>
          <div>
            <img
              src={s3}
              alt="Gift Selection"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={s4} alt="Workshops" className="rounded-xl shadow-lg" />
          </div>
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">04.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Fragrance Events and Workshops
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Join us for fragrance-centric events and workshops that celebrate
              the art of perfumery. Immerse yourself in the captivating world of
              scents, learn from experts, and discover the nuances of different
              fragrance families.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">05.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Eco-friendly Initiatives
            </h4>
            <p className="text-gray-300 leading-relaxed">
              At Local Face, we are committed to sustainability and
              eco-conscious practices. We offer guidance on selecting
              environmentally friendly and cruelty-free fragrances.
            </p>
          </div>
          <div>
            <img
              src={s5}
              alt="Eco friendly"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={s6}
              alt="Online Shopping"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-orange-500 text-4xl font-bold mb-4">06.</h3>
            <h4 className="text-xl font-semibold mb-4">
              Online Shopping Convenience
            </h4>
            <p className="text-gray-300 leading-relaxed">
              Explore our carefully curated collection of perfumes from the
              comfort of your home. Our user-friendly website offers a seamless
              shopping experience, complete with detailed product descriptions
              and customer reviews.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center py-16 px-6 text-gray-400 max-w-3xl mx-auto">
        <p>
          At Local Face, our passion for perfumery drives us to go above and
          beyond to serve you better. We invite you to experience our
          exceptional services and indulge in the world of luxurious scents.
        </p>
        <p className="mt-8">Your Local Face Team</p>
      </footer>
    </div>
  );
}
