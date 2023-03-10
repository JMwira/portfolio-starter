import React from 'react';
import Image from "../assets/avatar.svg"
import {FaGithub, FaYoutube, FaDribbble} from "react-icons/fa"
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Banner = () => (
  <section className='min-h-[8vh] lg:min-h-[78vh] flex items-center' >
    <div className='container mx-auto' >
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-5' >
        <div className='flex-1 text-center font-secondary lg:text-left' >
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-[55px] lg:text-[90px] font-bold mb-8 leading-[0.8]' >
            BEN <span>AIDEN</span>
          </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{once:false, amount:.7}}
          className='mb-6 text-[20px] lg:text-[55px] font-secondary font-semibold' >
          <span className='text-white'>I am a </span>
          <TypeAnimation sequence={[
            'Developer',
            2000,
            'designer',
            2000,
            'Tech enthusiast',
            2000
          ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
          />
        </motion.div>
        
        
          
        <motion.p
          variants={fadeIn('up', 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{once:false, amount:.7}} className='mb-8 max-w-lg mx-auto lg:mx-0' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{once:false, amount:.7}}
          className='max-w-max flex-col lg:flex-row sm:gap-y-8 flex gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
            <button className='btn btn-sm sm:mb-5' >
              Contact me
            </button>
            <a href="#" className='text-gradient btn-link sm:mb-5' >
              My portfolio
            </a>
            
          {/* social icons */}
          <div className='flex gap-x-6 text-[20px] mx-auto max-w-max sm:mb-5 lg:mx-0' >
            <a href='#' >
              <FaGithub/>
            </a>
            <a href='#' >
              <FaYoutube/>
            </a>
            <a href='#' >
              <FaDribbble/>
            </a>
          </div>
          </motion.div>
          
        </div>
        <motion.div
        variants={fadeIn('down',.5)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false, amount:.7}}
        className='hidden lg:flex flex-1' >
          <img src={Image} />
        </motion.div>
      </div>
    </div>
  </section>
)
export default Banner;
