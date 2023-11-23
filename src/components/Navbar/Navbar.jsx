"use client"

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import {RxCross2} from "react-icons/rx";
import { motion,useMotionValueEvent,useScroll} from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
    const [navStyle,setNavStyle] = useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
      if(latest>0.2){
        setNavStyle("sticky")
      }else{
        setNavStyle("");
      }
    })
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/* left Side */}
          <div className="n-logo">
            <span>ZAINSKEEPSCODE</span>
          </div>
          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
              <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy={true} smooth={true} offset={100}>
              <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy={true} smooth={true}>
              <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy={true} smooth={true} offset={100}>
              <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version */}
      <div className="nm-container">
        {/* logo */}
        <span>ZAINSKEEPSCODE</span>

        {/* menu icon */}
        {
            mobileMenuOpen ? 
            <RxCross2 style={{cursor:"pointer"}} size={30} onClick={()=>setMobileMenuOpen(false)}/>
            : <BiMenuAltRight style={{cursor:"pointer"}} size={30} onClick={()=>setMobileMenuOpen(true)}/>
        }

        {/* mobile menu */}
        <div className="nm-menu" style={{transform:mobileMenuOpen && "translateX(0%)"}}>
          <Link onClick={()=>setMobileMenuOpen(false)} to="wwd-wrapper" spy={true} smooth={true}>
          <span>What we do</span>
          </Link>
          <Link onClick={()=>setMobileMenuOpen(false)} to="hiw-wrapper" spy={true} smooth={true}>
          <span>How it works</span>
          </Link>
          <Link onClick={()=>setMobileMenuOpen(false)} to="wwi-wrapper" spy={true} smooth={true}>
          <span>Who we invest in</span>
          </Link>
          <Link onClick={()=>setMobileMenuOpen(false)} to="t-wrapper" spy={true} smooth={true}>
          <span>Testimonials</span>
          </Link>
          <div className="m-funded-button">
            Get Funded 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
