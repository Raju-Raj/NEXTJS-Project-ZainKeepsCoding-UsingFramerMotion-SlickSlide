"use client"
import React from 'react';
import "./WhatWeDo.css";
import { features } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className="container">
            <div className="wwd-container">

                {/* head of section */}
                <div className="wwd-head">
                    <motion.span variants={tagVariants} initial="offscreen" whileInView="onscreen" className='tag'>What we do</motion.span>
                    <motion.span variants={titleVariants} initial="offscreen" whileInView="onscreen"  className='title'>{" "}Empowering founders with non dilutive capital expertise</motion.span>
                    <motion.span variants={desVariants} initial="offscreen" whileInView="onscreen"  className='des'>Here is how we can evaluate</motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span variants={titleVariants} initial="offscreen" whileInView="onscreen" className='sec-title'>Blue Advances</motion.span>
                        <motion.span variants={desVariants} initial="offscreen" whileInView="onscreen" className='text'>Fund recurring growth expenses e.g. customer acquisition, inventory</motion.span>
                        <div className="block-features">
                            {
                                features.slice(0,3).map((feature,i)=>(
                                    <motion.div initial="offscreen" whileInView="onscreen" variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    {/* second block */}
                    <div className="wwd-block">
                        <motion.span variants={titleVariants} initial="offscreen" whileInView="onscreen" className='sec-title'>Blue Seeds</motion.span>
                        <motion.span variants={desVariants} initial="offscreen" whileInView="onscreen" className='text'>Fund one-offs to scale e.g. product, hiring</motion.span>
                        <div className="block-features">
                            {
                                features.slice(3,6).map((feature,i)=>(
                                    <motion.div initial="offscreen" whileInView="onscreen" variants={containerVariants((i+1)*0.1)} className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60}/>
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* support block */}
                <motion.div variants={containerVariants(0.3)} initial="offscreen" whileInView="onscreen"  className="wwd-support">

                    {/* left side */}
                    <div>
                        <span className="sec-title">Blue Growth Supports</span>
                        <span className="des">
                            Data Insights and full stack expertise to supercharge growth
                        </span>
                    </div>

                    {/* right side */}
                    <div>
                        <span className="text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptas suscipit quas pariatur libero 
                        </span>
                        <span className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit voluptatibus explicabo iusto quo blanditiis et quaerat natus corporis optio modi beatae non nisi ipsam odio delectus debitis. Ducimus quibusdam, hic officia nisi consequatu
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo