import React from 'react';
import "./OurDiff.css";
import { ourDiffFeatures } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const OurDiff = () => {
  return (
    <div className='od-wrapper'>
        <div className="container">
            <div className="od-container">
                {/* head */}
            <div className="od-head">
                <motion.span variants={tagVariants} initial="offscreen" whileInView="onscreen" className='tag'>Our Diffrences</motion.span>
                <motion.span variants={titleVariants} initial="offscreen" whileInView="onscreen" className='title'>Fair Capital, hassle free</motion.span>
                <motion.span variants={desVariants} initial="offscreen" whileInView="onscreen" className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium id voluptate a quas dicta atque, error fugiat aliquid temporibus corrupti doloremque vero deleniti incidunt ipsum iusto in blanditiis eos deserunt harum animi? Deserunt, aut, nisi maiores nemo repellendus sed, voluptates accusamus tempore est at impedit iste eligendi. Ipsum, accusantium sit?</motion.span>
            </div>

            {/* feature */}
            <div className="od-features">
                {
                    ourDiffFeatures.map((feature,i)=>(
                        <motion.div variants={containerVariants((i+1)*0.1)} initial="offscreen" whileInView="onscreen" key={i} className='od-feature'>
                            <Image src={feature.icon} alt='feature' width={128} height={128}/>
                            <span className='sec-title'>{feature.title}</span>
                            <span className='text'>{feature.des}</span>
                        </motion.div>
                    ))
                }
            </div>

            </div>
        </div>
    </div>
  )
}

export default OurDiff