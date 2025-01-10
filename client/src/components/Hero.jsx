import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rightA from '../assets/rightA.svg';
import { gsap } from "gsap";

const Hero = () => {
  const learningRef = useRef(null); // Reference for the 'learning' link

  useEffect(() => {
    const link = learningRef.current;

    // GSAP timeline for the hover animation
    const animation = gsap.timeline({ paused: true });

    animation.fromTo(
      link.querySelector('.underline'), // Target the underline element
      { width: '0%' },
      { width: '100%', duration: 0.4, ease: 'power2.inOut' }
    );

    // Event listeners for hover effects
    link.addEventListener('mouseenter', () => animation.play());
    link.addEventListener('mouseleave', () => animation.reverse());

    // Cleanup listeners on unmount
    return () => {
      link.removeEventListener('mouseenter', () => animation.play());
      link.removeEventListener('mouseleave', () => animation.reverse());
    };
  }, []);

  return (
    <div>
      {/* <div
        style={{
          backgroundImage:
            'url(https://asterhealthacademy.com/wp-content/uploads/2023/06/home-doctor-banner-image-desktop-1-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '650px',
          objectFit:'cover'
        }}
        className="hero flex items-center"
      > */}
          <div
            style={{
              backgroundImage:
                'url(https://asterhealthacademy.com/wp-content/uploads/2023/06/home-doctor-banner-image-desktop-1-1.jpg)',
            }}
            className="
              hero 
              flex items-center
              bg-cover bg-no-repeat
               bg-[position:70%] sm:bg-[position:70%] md:bg-[position:60%] lg:bg-center
              w-full h-[650px]
            "
          >
        <div className="hero-title lg:max-w-[1140px] bt:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-[1px] px-[15px]   mx-auto  ">

          <div className="hero-title-in">

            <h2 
            className=" md:text-[53px] text-[34px] text-[#134d92] 
            leading-1.3 
            lg:max-w-[60%] bt:max-w-[71%] md:max-w-[69%]
            font-[700] mb-[25px]">
              <span></span>
              Empowering healthcare with best-in-class professional education
            </h2>

            <p 
            className="
              lg:max-w-[33%] md:max-w-[48%]  bt:max-w-[55%] max-w-[100%]
              lg:text-[24px] bt:text-[22px] md:text-[20px] text-[18px] 
              leading-1.7  opacity-[.7] tracking-[-.5px]
              lg:mb-[40px] bt:mb-[35px] md:mb-[30px] mb-[25px]
            "
            >
              We just don't give our student only lecture but real life
              experience.
            </p>

            <div className="hero-controls flex items-center flex-wrap">
              <Link className="bg-transparent border-[2px] border-[#134d92] px-[26px] text-[16px] rounded-[500px] my-[10px] mr-[]10px">
                <span className="leading-[57px] tracking-px-0.5 text-[#134d92]">
                  Explore Courses
                </span>
              </Link>

              <Link
                ref={learningRef}
                className="learning text-[14px] relative m-[10px] flex items-center"
              >
                <span className='text-[#134d92]'>Start Learning</span>
                <span className="pl-[4px]">
                  <img src={rightA} alt="" className="w-[14px] h-[13px]" />
                </span>
                {/* Underline element */}
                <span
                  className="underline absolute bottom-0 left-0 h-[2px] bg-[#134d92]"
                  style={{ width: '0%' }}
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
