import React from 'react';
import {BsArrowUpRight} from "react-icons/bs"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Services = () => {
  const services = [
    {
      name:'UI/UX Design',
      desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link:'Learn more'
    },
    {
      name:'Development',
      desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link:'Learn more'
    },
    {
      name:'Digital Marketing',
      desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link:'Learn more'
    },
    {
      name:'Prroduct Branding',
      desciption:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link:'Learn more'
    },
  ]
  return(
  <section id="services" className='section'>
    <div className='container mx-auto' >
      <div className='flex flex-col lg:flex-row lgitems-center' >
        <motion.div
        variants={fadeIn('right',.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false, amount:.7}}
        className='flex-1 lg:bg-services bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0 ' >
          <h2 className='h2 text-accent mb-6' >What I do.</h2>
          <h3 className='h3 max-w-[455px] mb-16' >I'm a freelance frontend developer with over 5 years of experience.</h3>
          <button className='btn btn-sm' >See my work</button>
        </motion.div>
        <motion.div
        variants={fadeIn('left', .3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{once:false, amount:.7}}
        className='flex-1' >
          <div>
            {
              services.map((service, i)=>(
                <div className='border-b border-white/20 mb-[38px] flex pb-5' key={i}>
                  <div className='max-w-[476px]' > 
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6' >{service.name}</h4>
                    <p className='font-secondary leading-tight' >{service.desciption}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end' >
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex items-center justify-center' >
                      <BsArrowUpRight/>
                    </a>
                    <a className='text-gradient text-sm' >{service.link}</a>
                  </div>
                </div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Services;
