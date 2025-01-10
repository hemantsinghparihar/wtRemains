import React from 'react'
import { Link } from 'react-router-dom'
import x from '../assets/x.svg'
import mailIcon from '../assets/mail.svg'
import phoneIcon from '../assets/phone.svg'
import Nav from './Nav'

const MobileNav = ({setIsMobileMenu,sidebarItems}) => {
  return (
    <>
      <div 
        className={`popup-mobile-menu  
            z-50 fixed w-[100vw] h-[100vh] top-0 bottom-0 left-0 right-0  bg-black/80
            `}
      >
        <div 
            className="inner-wrapper md:w-[400px] w-[300px]
            bg-white relative h-[100%] flex flex-col 
            md:py-[60px] md:px-[50px] py-[30px] px-[30px]  
            overflow-y-auto"
        >
          <div className="inner-top">
            <div className="content flex justify-between items-center">
              <div className="logo">
                <Link href="/">
                  {/* <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  /> */}
                  <img src="https://f9e9317a.delivery.rocketcdn.me/wp-content/uploads/2023/10/Aster-Health-Academy_Logo-497x190.png" alt="" className='w-[140px] h-[50px] ' />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                   onClick={() => setIsMobileMenu(false)}
                >
                  <img src={x} alt="" className='w-[20px] h-[21px]' />
                </button>
              </div>
            </div>

            {/* ==============================content section============================= */}
            <p className="description 
            lg:text-[14px] md:text-[16px] text-[14px] leading-[1.45]
             font-normal mb-[30px] mt-[20px] pr-[18%] text-[#6b7385]">
              Histudy is a education website template. You can customize all.
            </p>

            <ul 
            className="navbar-top-left rbt-information-list justify-content-start
             text-[#6b7385] flex flex-col justify-center pl-0 list-none my-[-2px] mx-[-7px] flex-wrap
             text-[14px]
             ">
              <li className='text-[14px] my-[2px] mx-[7px]'>
                <Link href="mailto:hello@example.com" className='flex gap-[10px] items-center'>
                  <span><img src={mailIcon} alt=""  className='w-[14px] h-[13px]'/></span>example@gmail.com
                </Link>
              </li>
              <li className='my-[2px] mx-[7px]'>
                <Link href="#" className='flex gap-[10px] items-center'>
                  <span><img src={phoneIcon} alt="" className='w-[14px] h-[13px]' /></span>(302) 555-0107
                </Link>
              </li>
            </ul>

          </div>

          <Nav sidebarItems={sidebarItems} />

          {/* <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="#"
              >
                <span>Enroll Now</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MobileNav
