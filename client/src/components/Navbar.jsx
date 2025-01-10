import React, { useState } from 'react';
import downArrow from '../assets/downArrow.svg';
import searchIcon from '../assets/search.svg';
import rightArrow from '../assets/rightArrow.svg';
import cart from '../assets/cart.svg';
import user from '../assets/user.svg'
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/Home.svg';
import bookmarkIcon from '../assets/bookmark.svg'
import heart from '../assets/heart.svg'
import menu from '../assets/menu.svg'
import MobileNav from './MobileNav';

const Navbar = () => { 
  const [isMobileMenu,setIsMobileMenu]=useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const sidebarItems = [
    { 
       label: "AI ML learning courses",
       menuType: "ai",
       content: [
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute:'iit roorkee',
          course:'Data science and machine learning',
          duration:'6 months'
          

        }
       ]
    },
    { 
      label: "Data Science And Business Analytics",
      menuType: "dataScience",
      content: [
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
        institute: 'iit madras',
        course: 'Data Science and Business Analytics',
        duration: '12 months'
      },
      {
        Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
        institute: 'iim ahmedabad',
        course: 'Business Analytics and Strategy',
        duration: '9 months'
      }
      ]

     },
    { 
      label: "Leadership and Management",
      menuType: "LM",
       content: [
        
          {
            Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
            institute: 'Harvard Business School',
            course: 'Leadership and Management Program',
            duration: '8 weeks'
          },
          {
            Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
            institute: 'Stanford Graduate School of Business',
            course: 'Executive Leadership Development',
            duration: '6 months'
          }
        
       ]
    },
    { 
      label: "Online Degree And Study Abroad",
      menuType: "abroad",
       content: 
        [
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'EdX',
          course: 'Online Master\'s Degree in Computer Science',
          duration: '1-3 years'
        },
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'Coursera',
          course: 'Bachelor of Science in Computer Science',
          duration: '3-4 years'
        },
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'Study Abroad Program',
          course: 'International Business Management',
          duration: '1 year'
        }
       ]
    },
    {
      label: "Doctorate",
      menuType: "doctorate", 
      content: [
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'Harvard University',
          course: 'Ph.D. in Computer Science',
          duration: '4-6 years'
        },
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'Stanford University',
          course: 'Ph.D. in Artificial Intelligence',
          duration: '5-7 years'
        },
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'MIT',
          course: 'Doctor of Science in Electrical Engineering and Computer Science',
          duration: '4-5 years'
        }
      ]
    },
    { 
      label: "Undergraduate",
      menuType: "undergraduate", 
      content: [
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'Stanford University',
          course: 'Ph.D. in Artificial Intelligence',
          duration: '5-7 years'
        },
        {
          Image:'https://intellipaat.com/course-image/2023/05/Roorkee-1.png',
          institute: 'MIT',
          course: 'Doctor of Science in Electrical Engineering and Computer Science',
          duration: '4-5 years'
        }
      ] 
    },
  ];

  return (
    <div className='bg-white relative'>

      <div className='nav-top w-full'>
        <div className="search py-[15px] border">
          <form action="" className='flex border rounded-[500px] max-w-[50%] min-h-[43px] mx-auto px-[10px] py-[5px]'>
            <input type="text" placeholder='Search Course' className='pr-[65px] pl-[20px] w-full outline-none' />
            <button>
              <img src={searchIcon} alt="" className='w-[18px] h-[17px]' />
            </button>
          </form>
        </div>
      </div>

      {/* Lower nav bar================================================= */}

      <div className="nav-b relative">
        <div className="nav-in lg:max-w-[1140px] bt:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-[1px] px-[15px]  flex justify-between mx-auto items-center h-[80px] ">

          {/* logo=============================== */}

          <div className="logo max-h-[49px] w-[130px]">
            <img src="https://f9e9317a.delivery.rocketcdn.me/wp-content/uploads/2023/10/Aster-Health-Academy_Logo-497x190.png" alt="" />
          </div>

          {/* links============================== */}

          <div className='hidden lg:block'>
            <ul className='flex text-[16px] font-[600] h-full '>
              <li className='flex items-center px-[10px] text-[#134d92] font-euclid'>Home </li>
              <li className='flex items-center px-[10px] text-[#134d92]'>About </li>

              <li
                className='flex items-center px-[10px] h-[70px] text-[#134d92] '
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                Programs
                <span
                  className={`w-[16px] h-[16px] flex items-center transition-transform duration-300 ${
                    isDropdownVisible ? 'rotate-180' : ''
                  }`}
                >
                  <img src={downArrow} alt="" />
                </span>

                {isDropdownVisible && (
                  <div
                    className="dropdown absolute z-40 top-[80%] left-[20%] mt-2 bg-[#f6f8fb] shadow-md text-black flex md:w-[900px]  "
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Sidebar */}
                    <div className='sidebar bg-white pt-[30px] w-[300px]'>
                      <h2 className='text-[18px] leading-[28px] font-semibold px-[20px]'>Categories</h2>
                      <ul className='text-[16px] text-[#6b7385]'>
                        {sidebarItems.map((item, index) => (
                          <li
                            key={index}
                            className='flex items-center hover:bg-[#f6f8fb] py-[8px] cursor-pointer px-[20px]'
                            onMouseEnter={() => setHoveredItem(item.label)}
                          >
                            {item.label}
                            <span className='w-[14px] h-[14px]'>
                              <img src={rightArrow} alt="" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Main Bar */}
                    <div className='mainbar p-[20px] pt-[30px] '>
                      {hoveredItem ? (
                        <>
                          {/* Find the hovered item and display its label as the title */}
                          <h2 className='text-[20px] font-semibold text-[#192335] mb-4'>
                            {sidebarItems.find(item => item.label === hoveredItem)?.label}
                          </h2>

                         <div className='flex flex-wrap gap-[20px] '>
                          {sidebarItems.find(item => item.label === hoveredItem)?.content.map((one, index) => (
                              <div key={index} className='card border rounded-md px-2 py-2 shadow-sm bg-white mb-4 w-[300px] flex flex-col gap-[5px]'>
                                <img src={one.Image} alt=""  className='w-[100px]'/>
                                <h3 className='text-[16px] font-medium text-[#192335]'>{one.institute}</h3>
                                <p className='text-[14px] text-[#6b7385]'> {one.course}</p>
                                <p className='text-[14px] text-[#6b7385]'> {one.duration}</p>
                              </div>
                            ))}
                         </div>
                        </>
                      ) : (
                        <p className='text-[16px]'>Hover over a category to see details here.</p>
                      )}
                    </div>
                    {/* <div className='mainbar   p-[20px] pt-[30px] '>
                    {hoveredItem ? (
                      
                      sidebarItems.find(item => item.label === hoveredItem)?.content.map((one, index) => (

                        <div key={index} className='card border rounded-md p-4 shadow-sm bg-white'>
                          <h3 className='text-[16px] font-medium text-[#192335]'>{one.institute}</h3>
                          <p className='text-[14px] text-[#6b7385]'>Course: {one.course}</p>
                          <p className='text-[14px] text-[#6b7385]'>Duration: {one.duration}</p>
                        </div>
                        
                      ))
                    ): (
                        <p className='text-[16px]'>Hover over a category to see details here.</p>
                      )}
                    </div> */}
                  </div>
                )}
              </li>

              <li className='flex items-center px-[10px] text-[#134d92]'>Partners </li>
              <li className='flex items-center px-[10px] text-[#134d92]'>Blogs </li>
              <li className='flex items-center px-[10px] text-[#134d92] '>Contact
                 {/* <span className='w-[16px] h-[16px] flex items-center'><img src={downArrow} alt="" /></span> */}
              </li>
            </ul>
          </div>

                {/*=======================  cart ============================================ */}

          <div className='hidden lg:flex gap-[5px] text-[16px] h-[80px] font-[600] '>

            <div className="cart flex items-center gap-[5px]  px-1 cursor-pointer text-[#134d92]">
              <span className='w-[16px] h-[16px]'>
                <img src={cart} alt="" className='' />
              </span>
              <h4 >Cart</h4>
            </div>

            <div 
            className="admin text-[16px] flex items-center gap-[5px] px-1 relative cursor-pointer text-[#134d92] "
            onMouseEnter={() => setIsProfileDropdownVisible(true)}
            onMouseLeave={() => setIsProfileDropdownVisible(false)}
            >
              <span className='w-[16px] h-[16px]'>
                <img src={user} alt="" className='' />
              </span>
              <h4>Admin</h4>

              {
              isProfileDropdownVisible && (
                <div
                 className='bg-white min-w-[250px] absolute rounded-b-sm top-[90%] right-0 p-2 border'
                 
                 >

                  <div className="user-profile flex w-full gap-[12px] p-4 ">

                      <div className="userImg overflow-hidden rounded-full border w-[52px] h-[52px]">
                        <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fteam%2Favatar.jpg&w=48&q=75" alt=""  className='object-contain w-full'/>
                      </div>

                      <div className="user-details">
                        <h2 className='text-[18px] font-semibold'>Rainbow Dev</h2>
                        <div className='text-end'>
                          <Link className='text-[#2f57ef] text-[14px] mx-auto'>View Profile</Link>
                        </div>
                        
                      </div>

                      
                  </div>

                  <div className='profile-menu'>
                        <div className='top-menu flex flex-col '>

                          <Link className='flex gap items-center p-1 hover:bg-[#f6f8fb] '>
                            <span>
                              <img src={HomeIcon} alt="" className='w-[17px] h-[17px]'  />
                            </span>
                             <p className='text-[#6b7385]'>My Dashboard</p>
                          </Link>

                          

                          <Link className='flex gap items-center p-1 hover:bg-[#f6f8fb] '>
                            <span>
                              <img src={bookmarkIcon} alt="" className='w-[17px] h-[17px]'  />
                            </span>
                             <p className='text-[#6b7385]'>Bookmark</p>
                          </Link>

                          <Link className='flex gap items-center p-1 hover:bg-[#f6f8fb] '>
                            <span>
                              <img src={heart} alt="" className='w-[17px] h-[17px]'  />
                            </span>
                             <p className='text-[#6b7385]'>Wishlist</p>
                          </Link>

                        </div>

                  </div>
                  

                </div>
              )
            }


            </div>

           

           

          </div>


          {/* menu============= */}
          <div className='menu lg:hidden block'>
            <span 
            className='w-[40px] h-[40px]' 
            onClick={()=>{setIsMobileMenu(!isMobileMenu)}}
            >
              <img className='w-[22px] h-[24px]' src={menu} alt="" />
            </span>
          </div>
        </div>
      </div>

      {/* =========mobile view nav==================== */}
      {
        isMobileMenu && (
           <MobileNav setIsMobileMenu={setIsMobileMenu} sidebarItems={sidebarItems}/>
          
        )
      }
      
    </div>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import downArrow from '../assets/downArrow.svg';
// import searchIcon from '../assets/search.svg';
// import rightArrow from '../assets/rightArrow.svg';
// import cart from '../assets/cart.svg';

// const Navbar = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   return (
//     <div className='bg-white border'>

//       <div className='nav-top w-full'>

//         <div className="search py-[15px] border">
//           <form action="" className='flex border rounded-[500px] max-w-[50%] min-h-[43px] mx-auto  px-[10px] py-[5px]'>
//             <input type="text" placeholder='Search Course' className='pr-[65px] pl-[20px] w-full outline-none'/>
//             <button >
//               <img src={searchIcon} alt="" className='w-[18px] h-[17px]'/>
//             </button>
//           </form>
//         </div>

//       </div>

// {/*lower nav bar=================  */}

//       <div className="nav-b relative">
//         <div className="nav-in max-w-[1140px] flex justify-between mx-auto items-center h-[80px] py-[10px]">
         
//             <div className="logo max-h-[49px] w-[130px]">
//               <img src="https://f9e9317a.delivery.rocketcdn.me/wp-content/uploads/2023/10/Aster-Health-Academy_Logo-497x190.png" alt="" />

//             </div>

//           <div className=' '>
//             <ul className='flex text-[18px]'>
//               <li className='flex items-center px-[10px]'>Home </li>

//               <li className='flex items-center px-[10px]'>About </li>

//               <li className='flex items-center px-[10px] '
//                 onMouseEnter={() => setIsDropdownVisible(true)}
//                 onMouseLeave={() => setIsDropdownVisible(false)}
//               >Programs 
//                 <span 
//                 className={`w-[16px] h-[16px] flex items-center transition-transform duration-300 ${
//                                   isDropdownVisible ? 'rotate-180' : ''
//                                 }`}
//                 >
//                   <img src={downArrow} alt="" />
//                 </span>
//                 {isDropdownVisible && (
//                   <div className="dropdown absolute top-[60%] left-[20%] mt-2 bg-white shadow-md   text-black flex md:min-w-[900px] py-[30px] px-[20px]">
//                     <div className='sidebar' >
//                       <h2>Categories</h2>
//                       <ul className='text-[16px]'>
//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>
//                           AI ML learning courses <span className='w-[14px] h-[14px]'><img src={rightArrow} alt="" /></span>
//                         </li>

//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>Data Science And Buisness Analytics <span className='w-[18px] h-[18px]'><img src={rightArrow} alt="" /></span></li>

//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>Leadership and Management <span className='w-[18px] h-[18px]'><img src={rightArrow} alt="" /></span></li>

//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>Online Degree And Study Abroad <span className='w-[18px] h-[18px]'><img src={rightArrow} alt="" /></span> </li>

//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>Doctorate <span className='w-[18px] h-[18px]'><img src={rightArrow} alt="" /></span></li>

//                         <li className='flex items-center hover:bg-slate-300 py-[8px] cursor-pointer'>Undergraduate <span className='w-[18px] h-[18px]'><img src={rightArrow} alt="" /></span></li>
//                       </ul>

//                     </div>

                    

//                   </div>
//             )}


//               </li>

//               <li className='flex items-center px-[10px]'>Partners </li>

//               <li className='flex items-center px-[10px]'>Blogs </li>

//               <li className='flex items-center px-[10px]'>Contact <span className='w-[16px] h-[16px] flex items-center'><img src={downArrow} alt="" /></span></li>
//             </ul>


//           </div>

//           <div className='flex text-[18px]'>
//              <div className="cart flex gap-[10px] border-r-2 px-1">
//               <span className='w-[30px] h-[30px] '>
//                 <img src={cart} alt=""  className=''/>
//               </span>
//               <h4>Cart</h4>

//              </div>

//              <div className="admin flex gap-[10px]  px-1">
//                 <span className='w-[30px] h-[30px] '>
//                   <img src={cart} alt=""  className=''/>
//                 </span>
//                 <h4>Admin</h4>
//              </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

















// import React, { useState } from 'react';
// import downArrow from '../assets/downArrow.svg';
// import searchIcon from '../assets/search.svg'
// import rightArrow from '../assets/rightArrow.svg'

// const Navbar = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   return (
//     <div className='bg-white border'>
//       <div className="nav-in max-w-[1200px] flex justify-between mx-auto items-center">
//         <div className="left flex items-center">
//           <div className="logo">
//             <h1>Astro</h1>
//           </div>

//           <div
//             className="courses py-[11px] px-[16px] flex items-center relative bg-[#0EB48D] text-white"
//             onMouseEnter={() => setIsDropdownVisible(true)}
//             onMouseLeave={() => setIsDropdownVisible(false)}
//           >
//             <h4>Courses</h4>
//             <span
//               className={`w-[22px] h-[22px] transition-transform duration-300 ${
//                 isDropdownVisible ? 'rotate-180' : ''
//               }`}
//             >
//               <img src={downArrow} alt="down arrow" />
//             </span>

//             {isDropdownVisible && (
//               <div className="dropdown absolute top-[100%] left-0 mt-2 bg-white shadow-md border text-black flex md:min-w-[900px]">
//                 <div className='sidebar' >
//                   <h2>Categories</h2>
//                   <ul>
//                     <li className='flex '>AI ML learning courses <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span></li>

//                     <li className='flex '>Data Science And Buisness Analytics <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span></li>

//                     <li className='flex '>Leadership and Management <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span></li>

//                     <li className='flex '>Online Degree And Study Abroad <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span> </li>

//                     <li className='flex '>Doctorate <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span></li>

//                     <li className='flex '>Undergraduate <span className='w-[22px] h-[22px]'><img src={rightArrow} alt="" /></span></li>
//                   </ul>

//                 </div>

//                 <div className='mainbar border'>
//                   {/* main bar will display content base on the elements that are being hovered i the sidebar */}
//                   <div>

//                   </div>

//                 </div>

//               </div>
//             )}
//           </div>

//           <div className="search py-[11px] px-[16px]">
//             <form action="" className='border rounded-sm'>
//               <input className='w-[249px] h-[40px] ' type="text" placeholder='search here...'/>
//               <button><img src={searchIcon} alt="search icon" /></button>
//             </form>
//           </div>
//         </div>

//         <div className="right">
//           <nav className="flex justify-between gap-[20px]">
//             <h3 className="p-10px">Corporate Training</h3>
//             <h3>Hire From Us</h3>
//             <h3>Explore Courses</h3>
//             <button>Login</button>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;










