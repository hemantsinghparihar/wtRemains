import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import plus from '../assets/plus.svg'

const Nav = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(false);
    // const []=useState()

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

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
    <nav className="mainmenu-nav">
      <ul className="mainmenu py-[15px] px-0">

        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b ">
          <Link
            className=
            {`flex justify-between items-center  w-full py-[8px] text-[16px] 
                ${activeMenuItem === "home" ? "open" : ""}`}
            
           
          >
            
            <span>Home</span>
          
            
          </Link>

        </li>

        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b  ">
          <Link
            className={`flex justify-between items-center  w-full ${activeMenuItem === "home" ? "open" : ""} text-[16px] py-[8px]`}
            
           
          >
            
            <span>About</span>
          
            
          </Link>

        </li>
        
        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b  ">
          <Link
            className={`flex justify-between items-center text-[16px] py-[8px] w-full ${activeMenuItem === "home" ? "open" : ""}`}
            onClick={()=>{setActiveMenuItem(!activeMenuItem)}}
           
          >
            
            <span>Programs</span>
            <span><img src={plus} alt="" className='w-[20px] h-[20px] ' /></span>
            
          </Link>

          <div
            className={`rbt-megamenu menu-skin-dark ${
              activeMenuItem === "home" ? "active d-block" : ""
            }`}
          >
            <div className="wrapper">
              <div className="  pl-[14px]">
              {activeMenuItem &&
                sidebarItems.map((data, index)=> (
                    // <div key={index}>
                    // <h3 className="demo-title ">{data.label}</h3>
                   
                   
                    // </div>
                  <Link key={index}
                    className={`flex justify-between items-center text-[15px] py-[8px] w-full `}
                   
                   
                  >
                    
                    <span>{data.label}</span>
                    <span><img src={plus} alt="" className='w-[16px] h-[16px] ' /></span>
                    
                  </Link>
                ))}

              </div>
            </div>
          </div>
        </li>

        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b  ">
          <Link
            className={`flex justify-between items-center text-[16px] py-[8px]  w-full ${activeMenuItem === "home" ? "open" : ""}`}
            
           
          >
            
            <span>Partners</span>
          
            
          </Link>

        </li>

        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b  ">
          <Link
            className={`flex justify-between items-center text-[16px] py-[8px] w-full ${activeMenuItem === "home" ? "open" : ""}`}
            
           
          >
            
            <span>Blogs</span>
          
            
          </Link>

        </li>

        <li className="with-megamenu has-menu-child-item position-static text-[#192335] border-b  ">
          <Link
            className={`flex justify-between items-center text-[16px] py-[8px] w-full ${activeMenuItem === "home" ? "open" : ""}`}
            
           
          >
            
            <span>Contact</span>
          
            
          </Link>

        </li>

       
       
      </ul>
    </nav>
  )
}

export default Nav




//inside sidebar items
 {/* <div className="row">
                        {data.content.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item"
                        >
                            <div className="demo-single">
                            <div className="inner">
                                <div className="thumbnail">
                                <Link to="#">
                                    <img
                                    src={item.Image}
                                    width={454}
                                    height={332}
                                    alt={`${item.course} Image`}
                                    />
                                </Link>
                                </div>
                                <div className="content">
                                <h4 className="title">
                                    <Link to="#">{item.course}</Link>
                                </h4>
                                <p>{item.institute}</p>
                                <p>{item.duration}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div> */}





// {sidebarItems &&
//     sidebarItems.map((data, index) => {
//       if (data.menuType === "home") {
//         const elements = data.menuItems?.map(
//           (value, innerIndex) => (
//             <div
//               className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item"
//               key={innerIndex}
//             >
//               <div className="demo-single">
//                 <div
//                   className={`inner ${
//                     value.badget ? "disable" : ""
//                   }`}
//                 >
//                   <div className="thumbnail">
//                     <Link href={value.link} className="relative">
//                       <Image
//                         src={value.img}
//                         width={454}
//                         height={332}
//                         alt="Demo Images"
//                       />
//                       {value.badget ? (
//                         <span className="rbt-badge-card rbt-badge-card__coming">
//                           Coming
//                         </span>
//                       ) : (
//                         ""
//                       )}
//                     </Link>
//                   </div>
//                   <div className="content">
//                     <h4 className="title">
//                       <Link href={value.link}>
//                         {value.title}
//                         {value.badget ? (
//                           <span className="rbt-badge-card ms-3 d-lg-none">
//                             Coming
//                           </span>
//                         ) : (
//                           ""
//                         )}
//                         <span className="btn-icon">
//                           <i className="feather-arrow-right"></i>
//                         </span>
//                       </Link>
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         );
//         return elements;
//       }
//       return null;
//     })}