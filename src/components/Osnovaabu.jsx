import React from 'react';
import parf from '../assets/parfume.svg';
import CardListabu from './Cardlistabu'; //bu error normalyiny

const Osnovaabu = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <h1 className='text-center text-4xl pt-10'>Our Blog Collection</h1>

      <div className='flex flex-col md:flex-row justify-evenly items-center p-10 gap-8'>
        <div className='max-w-xl'>
          <h2 className='text-[25px] text-gray-300 pb-5'>Discover the Art of Perfume</h2>
          <p className='text-xl text-gray-300'>
            Welcome to Local Face's Perfumery Blog Collection! Here, we invite you to immerse yourself in the captivating world of fragrances, where each blog post is a sensory journey that unveils the magic and allure of perfumes. Our team of fragrance enthusiasts, industry experts, and perfumers have curated an array of captivating articles to enrich your understanding and appreciation for these olfactory delights.
          </p>
          <br />
          <p className='text-xl text-gray-300'>
            At Local Face, we believe that perfumery is an extraordinary fusion of art, science, and emotion. Our passion for exquisite fragrances has inspired us to curate a treasure trove of blog posts, each designed to ignite your senses and deepen your appreciation for these olfactory wonders.
          </p>
        </div>
        <div>
          <img src={parf} alt="Perfume" className='w-[600px] rounded-sm' />
        </div>
      </div>

      <div className="px-10 pb-20">
        <CardListabu />
      </div>
    </div>
  );
};

export default Osnovaabu;
