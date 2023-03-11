import React from 'react';
import {motion} from "framer-motion"
import { fadeIn } from '../variants';

const Contact = () => {
  return (
  <section id="contact" className='section py-16 lg:section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center' >
        <motion.div
        variants={fadeIn('right',.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false, amount:.7}}
        className='flex-1' >
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide' >Get in touch</h4>
            <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12' >Let's work<br/>together!</h2>
          </div>
        </motion.div>
        <motion.form
        
        variants={fadeIn('left',.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false, amount:.7}}
        className='flex-1 border rounded-[5px] border-white/25 flex flex-col gap-y-6 p-6 items-start ' >
          <input type={'text'} placeholder="your name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
          <input type={'email'} placeholder="your email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
          <textarea placeholder="your message" className=' resize-none mb-12 bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
          <button className='btn btn-sm' >Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
  )
};

export default Contact;
