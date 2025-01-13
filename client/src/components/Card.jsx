import React from 'react'
import { Link } from 'react-router-dom'
import review from '../assets/Review.svg'
import bookmark from '../assets/bookmark.svg'
import book from '../assets/book.svg'
import users from '../assets/users.svg'
import rightA from '../assets/rightA.svg'

const Card = ({contentData}) => {
console.log('✌️contentData --->', contentData);
  return (
    <div className=' bt:w-[32%] md:w-[50%] w-[100%]  flex-grow-0 flex-shrink-0'>
        <div className='lg:p-[20px] bt:p-[15px]
        overflow-hidden h-[100%] relative rounded-[6px] bg-white shadow-sm '>

            <div className="card-img ">
                <Link className='w-[100%] h-[160px] block'>
                    <div className='w-full h-full object-cover rounded-[5px]'
                    style={{
                        backgroundImage: `url(https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fcourse%2Fcourse-online-02.jpg&w=384&q=75)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        
                    }}
                    >
                      

                    </div>

                </Link>

            </div>

            <div className="card-body pt-[20px]">

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

                        <ul className='mb-[14px] m-[-7px] flex '>
                            <li className='text-[#6b7385] text-[14px] leading-[15px] m-[7px] flex items-center gap-[5px]'>
                                <img src={book} alt="" className='w-[14px] h-[14px]' />
                                12 Lessons
                            </li>
                            <li className='text-[#6b7385] text-[14px] leading-[15px] m-[7px] flex items-center gap-[5px]'>
                                <img src={users} alt="" className='w-[14px] h-[14px]' />
                                50 students
                            </li>
                        </ul>

                        <p className='text-[18px] leading-[1.45] text-[#6b7385] mb-[20px]'>
                            Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                        </p>

                        {/* ===============Avatar=============== */}

                        <div className='flex items-center gap-[10px] mb-[10px]'>
                            <div className='avatar '>
                                <Link >
                                    <img src="https://histudy-nextjs.vercel.app/_next/image?url=%2Fimages%2Fclient%2Favatar-04.png&w=48&q=75" alt="" 
                                    className='w-[40px] h-[40px] rounded-[100%] object-cover p-[2px]  border-[2px] border-[#2f57ef21]'
                                    />
                                
                                </Link>

                            </div>
                            <div className='text-[14px] font-normal text-[#6B7385]'>
                                By 
                                <Link className='text-[#192335] font-medium'>
                                    Levi Arm
                                </Link>
                                In &nbsp;
                                <Link className='text-[#192335] font-medium'>
                                    Math teacher
                                </Link>
                            </div>

                        </div>


                        {/* ================= */}
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
      
    </div>
  )
}

export default Card
