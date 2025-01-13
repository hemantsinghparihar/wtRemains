import React, { useState } from 'react';
import rightArrow from '../assets/rightArrow.svg';
import Card from './Card';
import { Link } from 'react-router-dom';
import review from '../assets/Review.svg';
import bookmark from "../assets/bookmark.svg"
import rightA from '../assets/rightA.svg'

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  const categories = [
    {
      id: 'popular',
      name: 'Popular',
      content: [
        {
          title: 'Introduction to React',
          description: 'Learn the basics of React and build modern web applications.',
          instructor: 'John Doe',
          duration: '6 weeks',
          level: 'Beginner',
          rating: 4.8,
        },
        {
          title: 'Advanced JavaScript Techniques',
          description: 'Master advanced JavaScript concepts and improve your coding skills.',
          instructor: 'Jane Smith',
          duration: '8 weeks',
          level: 'Intermediate',
          rating: 4.9,
        },
        {
          title: 'Data Science Fundamentals',
          description: 'Dive into the world of data science and learn essential statistical concepts.',
          instructor: 'Alex Johnson',
          duration: '10 weeks',
          level: 'Intermediate',
          rating: 4.7,
        },
        {
            title: 'Advanced JavaScript Techniques',
            description: 'Master advanced JavaScript concepts and improve your coding skills.',
            instructor: 'Jane Smith',
            duration: '8 weeks',
            level: 'Intermediate',
            rating: 4.9,
        },
        {
          title: 'Data Science Fundamentals',
          description: 'Dive into the world of data science and learn essential statistical concepts.',
          instructor: 'Alex Johnson',
          duration: '10 weeks',
          level: 'Intermediate',
          rating: 4.7,
        },
        {
            title: 'Advanced JavaScript Techniques',
            description: 'Master advanced JavaScript concepts and improve your coding skills.',
            instructor: 'Jane Smith',
            duration: '8 weeks',
            level: 'Intermediate',
            rating: 4.9,
        },
        {
          title: 'Data Science Fundamentals',
          description: 'Dive into the world of data science and learn essential statistical concepts.',
          instructor: 'Alex Johnson',
          duration: '10 weeks',
          level: 'Intermediate',
          rating: 4.7,
        },
        {
            title: 'Advanced JavaScript Techniques',
            description: 'Master advanced JavaScript concepts and improve your coding skills.',
            instructor: 'Jane Smith',
            duration: '8 weeks',
            level: 'Intermediate',
            rating: 4.9,
        }
      ],
    },
    {
      id: 'new',
      name: 'New Courses',
      content: [
        {
          title: 'Machine Learning with Python',
          description: 'Learn to implement machine learning algorithms using Python.',
          instructor: 'Emily Chen',
          duration: '12 weeks',
          level: 'Advanced',
          rating: 4.9,
        },
        {
          title: 'Web Development with Vue.js',
          description: 'Build dynamic web applications using Vue.js framework.',
          instructor: 'David Lee',
          duration: '8 weeks',
          level: 'Intermediate',
          rating: 4.8,
        },
        {
          title: 'Blockchain Fundamentals',
          description: 'Understand the core concepts of blockchain technology and its applications.',
          instructor: 'Michael Brown',
          duration: '6 weeks',
          level: 'Beginner',
          rating: 4.7,
        },
      ],
    },
    {
      id: 'featured',
      name: 'Featured',
      content: [
        {
          title: 'Introduction to Artificial Intelligence',
          description: 'Explore the fundamentals of AI and its real-world applications.',
          instructor: 'Sarah Thompson',
          duration: '10 weeks',
          level: 'Intermediate',
          rating: 4.8,
        },
        {
          title: 'Data Visualization with D3.js',
          description: 'Learn to create interactive and compelling data visualizations.',
          instructor: 'Robert Garcia',
          duration: '6 weeks',
          level: 'Intermediate',
          rating: 4.6,
        },
        {
          title: 'Cloud Computing Essentials',
          description: 'Master the basics of cloud computing and popular platforms.',
          instructor: 'Jessica Williams',
          duration: '8 weeks',
          level: 'Beginner',
          rating: 4.7,
        },
        {
            title: 'Cloud Computing Essentials',
            description: 'Master the basics of cloud computing and popular platforms.',
            instructor: 'Jessica Williams',
            duration: '8 weeks',
            level: 'Beginner',
            rating: 4.7,
        }
      ],
    },
    {
      id: 'free',
      name: 'Free Courses',
      content: [
        {
          title: 'Introduction to Python Programming',
          description: 'Learn the basics of Python programming language.',
          instructor: 'Michael Johnson',
          duration: '4 weeks',
          level: 'Beginner',
          rating: 4.5,
        },
      ],
    },
  ];

  const handleCategoryClick = (id) => {
    setActiveCategory(id); // Update active category on click
  };

  // Find the active category data
  const activeCategoryData = categories.find((category) => category.id === activeCategory);

  return (
    <div
      className='contain xl:max-w-[1140px] bt:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-[1px] px-[15px] mx-auto'
    >
      <h2
        className='
            text-[#192335] lg:text-[2rem] bt:text-[44px] leading-[1.23] font-[700] max-w-[1140px] 
            text-center mb-[30px]
            '
      >
        Explore Our Programs
      </h2>

      {/* ========================Courses================ */}

      <div className='c-out'>
        <div className='c-in flex mx-[-15px]'>

          {/* =========sidebar=========== */}
          <div
            className='sidebar 
                    relative bt:max-w-[25%] md:max-w-[22%] w-[100%] px-[15px]
                    bt:flex-shrink-0 bt:flex-grow-0 
                '
          >
            <div
              className='side-in hidden md:block
                     sticky top-[64px] z-10 mb-[20px]
                    
                    '
            >
              <div className='bg-white rounded-[8px] p-[10px] shadow-sm '>
                
                {categories.map((category) => (
                  <h6
                    onClick={() => handleCategoryClick(category.id)}
                    key={category.id}
                    className={`
                                py-[5px] px-[12px] text-[16px] 
                                flex justify-between font-[600] items-center 
                                rounded-[4px] 
                                relative mb-[4px] cursor-pointer
                                ${
                                  activeCategory === category.id
                                    ? 'bg-[#134D92] text-white'
                                    : 'text-[#192335] hover:bg-[#134D92] hover:text-white'
                                }
                                `}
                  >
                    {category.name}
                    <img src={rightArrow} alt='' className='w-[9px] h-[14px]' />
                  </h6>
                ))}
              </div>
            </div>

            {/* additonal side bar for smaller screen*/}

            <div className='md:hidden'>
          {/* Add mobile sidebar content here */}
          <div className='bg-white rounded-[8px] p-[10px] shadow-sm'>
            {categories.map((category) => (
              <div key={category.id} className='mb-[10px]'>
                {/* Sidebar link */}
                <h6
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    py-[10px] px-[12px] text-[18px] 
                    flex justify-between font-[600] items-center 
                    rounded-[4px] 
                    relative cursor-pointer
                    ${
                      activeCategory === category.id
                        ? 'bg-[#134D92] text-white'
                        : 'text-[#192335] hover:bg-[#134D92] hover:text-white'
                    }
                  `}
                >
                  {category.name}
                  <img
                    src={rightArrow}
                    alt=''
                    className={`w-[9px] h-[14px] transition-transform duration-300 ${
                      activeCategory === category.id ? 'rotate-90' : ''
                    }`}
                  />
                </h6>

                {/* Content below the link */}
                {activeCategory === category.id && (
                  <div className='mob-card-container mt-[10px] pl-[12px] flex max-w-[100%] overflow-x-auto '>
                    {category.content.map((course, index) => (

                      <div
                        key={index}
                        className='mb-[8px] p-[8px] bg-[#ffffff] rounded-[4px] shadow-md min-w-[100%] min-h-[330px] '
                      >
                        <div className='h-[160px] w-[100%] overflow-hidden'>
                          <Link>
                            <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=384&q=75" alt="" className='object-cover w-full min-h-[140px]'/>
                          </Link>
                        </div>

                        {/*========= card body ========== */}

                        <div className='card-body p-3'>
                           <div 
                             className='review flex justify-between items-center mb-[4px] '
                             >
                                 <div className='rating flex items-center flex-wrap gap-[5px]'>
                                     <img src={review} alt="" className='w-[75px] h-[13px]'/>
                                     <span className='text-[14px] text-[#6B7385]'>(15 Reviews)</span>
     
                                 </div>
                                 <div className=''>
                                     <button>
                                         <img src={bookmark} alt="" className='w-[17px] h-[17px]' />
                                     </button>
     
                                 </div>
     
                             </div>  

                             <h4
                            className='lg:text-[.9rem] leading-[1] font-bold mb-[10px] text-[#192335]'
                            >
                                Artificial Intelligence In Healthcare: Theory to Practice
                            </h4>

                           <p className='text-[18px] leading-[1.45] text-[#6b7385] mb-[20px]'>
                            Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                            </p>
                          
                            <div className='flex justify-between items-center flex-wrap'>
                            <div className='flex items-center'>
                                                          <span className='text-[24px] font-[700]'>
                                                              $75
                                                          </span>
                                                          <span className='text-[#6b7385] line-through text-[20px] font-[700] pl-[7px]'>
                                                              $45
                          
                                                          </span>
                          
                                                      </div>
                                                      <Link className='text-[14px] text-[#192335] relative font-medium  flex   items-center'>
                                                         Learn More <span> <img src={rightA} alt="" className='h-[14px] w-[14px]'/></span>
                                                      </Link>
                          
                                                  </div>

                        </div>
                        
                      </div>
                    ))}

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


          </div>

          {/* =========main content=========== */}
          <div className='relative px-[15px] w-full bt:flex-shrink-0 bt:flex-grow-0 bt:max-w-[75%] 
           md:block hidden'>
            <div>
              <div className='flex flex-wrap mx-[-15px] gap-[10px]'>
                {/* Render the cards for the active category */}
                {activeCategoryData.content.map((course, index) => (
                  <Card key={index} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;









// import React,{useState} from 'react'
// import rightArrow from '../assets/rightArrow.svg'
// import Card from './Card';

// const Courses = () => {
//     const [activeCategory, setActiveCategory] = useState('popular'); 
//     const categories = [
//         { 
//             id: 'popular',
//             name: 'Popular',
//             content:[
//                  {
//                     title: "Introduction to React",
//                     description: "Learn the basics of React and build modern web applications.",
//                     instructor: "John Doe",
//                     duration: "6 weeks",
//                     level: "Beginner",
//                     rating: 4.8
//                  },
//                 {
//                     title: "Advanced JavaScript Techniques",
//                     description: "Master advanced JavaScript concepts and improve your coding skills.",
//                     instructor: "Jane Smith",
//                     duration: "8 weeks",
//                     level: "Intermediate",
//                     rating: 4.9
//                 },
//                 {
//                     title: "Data Science Fundamentals",
//                     description: "Dive into the world of data science and learn essential statistical concepts.",
//                     instructor: "Alex Johnson",
//                     duration: "10 weeks",
//                     level: "Intermediate",
//                     rating: 4.7
//                 }
//                 ] 
//         },
//         { 
//             id: 'new',
//             name: 'New Courses',
//             content: [
//                  {
//                     title: "Machine Learning with Python",
//                     description: "Learn to implement machine learning algorithms using Python.",
//                     instructor: "Emily Chen",
//                     duration: "12 weeks",
//                     level: "Advanced",
//                     rating: 4.9
//                  },
//                  {
//                     title: "Web Development with Vue.js",
//                     description: "Build dynamic web applications using Vue.js framework.",
//                     instructor: "David Lee",
//                     duration: "8 weeks",
//                     level: "Intermediate",
//                     rating: 4.8
//                  },
//                  {
//                     title: "Blockchain Fundamentals",
//                     description: "Understand the core concepts of blockchain technology and its applications.",
//                     instructor: "Michael Brown",
//                     duration: "6 weeks",
//                     level: "Beginner",
//                     rating: 4.7
//                  }
//             ]
//         },
//         { 
//             id: 'featured',
//             name: 'Featured',
//             content: [
               
//                 {
//                     title: "Introduction to Artificial Intelligence",
//                     description: "Explore the fundamentals of AI and its real-world applications.",
//                     instructor: "Sarah Thompson",
//                     duration: "10 weeks",
//                     level: "Intermediate",
//                     rating: 4.8,
//                     rate:'72'
//                 },
//                 {
//                     title: "Data Visualization with D3.js",
//                     description: "Learn to create interactive and compelling data visualizations.",
//                     instructor: "Robert Garcia",
//                     duration: "6 weeks",
//                     level: "Intermediate",
//                     rating: 4.6
//                 },
//                 {
//                     title: "Cloud Computing Essentials",
//                     description: "Master the basics of cloud computing and popular platforms.",
//                     instructor: "Jessica Williams",
//                     duration: "8 weeks",
//                     level: "Beginner",
//                     rating: 4.7
//                 }
//             ] 
//         },
//         { 
//             id: 'free',
//             name: 'Free Courses', 
//             content: [
//                 {
//                     title: "Introduction to Python Programming",
//                     description: "Learn the basics of Python programming language.",
//                     instructor: "Michael Johnson",
//                     duration: "4 weeks",
//                     level: "Beginner",
//                     rating: 4.5
//                 }
//             ]
//         },
//       ];

//       const handleCategoryClick = (id) => {
//         setActiveCategory(id); // Update active category on click
//       };
   
//   return (
//     <div 
//     className=
//         'contain  lg:max-w-[1140px] bt:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] sm:px-[1px] px-[15px]  mx-auto'
//     >

//         <h2 className='
//             text-[#192335] lg:text-[2rem] bt:text-[44px] leading-[1.23] font-[700] max-w-[1140px] 
//             text-center mb-[30px]
//             '
//         >
//             Explore Our Programs
//         </h2>

//         {/* ========================Courses================ */}
      
//         <div className='c-out'>
//             <div className='c-in flex mx-[-15px]'>

//                 {/* =========sidebar=========== */}

//                 <div className='sidebar 
//                     relative bt:max-w-[25%]  w-[100%] px-[15px]
//                     bt:flex-shrink-0 bt:flex-grow-0 
//                 '>
//                     <div 
//                     className='side-in
//                      sticky top-[64px] z-10 mb-[20px]
                    
//                     '>
//                         <div className='bg-white rounded-[8px] p-[10px] shadow-sm '>
//                             {/* these are the menu list */}
//                             {categories.map((category) => (
//                                 <h6 
//                                 onClick={() => handleCategoryClick(category.id)}
//                                 key={category.id}
//                                 className={`
//                                 py-[5px] px-[12px] text-[16px] 
//                                 flex justify-between font-[600] items-center 
//                                 rounded-[4px] 
//                                 relative mb-[4px] cursor-pointer
//                                 ${activeCategory === category.id ? 'bg-[#134D92] text-white' : 'text-[#192335] hover:bg-[#134D92] hover:text-white'}
//                                 `}
//                                 >
//                                     {category.name}
//                                     <img src={rightArrow} alt="" className='w-[9px] h-[14px]'/>
                                    
//                                 </h6>
//                              ))}

//                         </div>

//                     </div>

//                 </div>

//                 {/* {/* =========main content=========== */}
                
//                 <div className='reklative px-[15px] w-full  bt:flex-shrink-0 bt:flex-grow-0 bt:max-w-[75%] '>
//                     <div className=''>
//                         <div className='flex flex-wrap mx-[-15px] '>
//                         {categories.map((category) =>
//                             activeCategory === category.id && (
//                             // <div key={category.id} className="content">
//                             // <h3 className='text-[24px] font-[600] mb-[10px]'>{category.name}</h3>
//                             // <p className='text-[16px] text-[#192335]'>{category.content}</p>
//                             // </div>
//                             <Card contentData={category.content}/>
//                         )
//                         )}
                            
//                         </div>
//                     </div>

//                 </div>


//             </div>

//         </div>
//     </div>
//   )
// }

// export default Courses
