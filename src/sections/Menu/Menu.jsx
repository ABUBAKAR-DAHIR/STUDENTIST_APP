import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { hide } from '../Menu/menuSlice'
import { Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Menu() {
  const menu = useSelector((state) => state.menu.open)
  const dispatch = useDispatch()
  let [menuLocal, setMenuLocal] = useState(menu)
  useEffect(() => {
    if(!menuLocal){
      setTimeout(() => {
        dispatch(hide())
      }, 500);
    } 
  }, [menuLocal])

  // useEffect(() => {
  //   if()
  // }, [input])

  const innerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: 'easeIn' } }
  }


  return (
    <AnimatePresence mode="wait">
      {menuLocal && (
        <motion.section
          key="menu" // important for AnimatePresence
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            if (!menuLocal) dispatch(hide())
          }}
          className="fixed top-0 left-0 h-screen w-full bg-black z-50"
        >
          <motion.div
            variants={innerVariants}
            initial='hidden'
            duration={{duration: 0.5}}
            animate='visible'
            exit='exit'
          >
            <div className="absolute top-8 left-[calc(50%-100px)] max-sm:left-13 max-[412px]:top-20 ">
                {/* <div className='bars'/> */}
                <ul className='flex gap-4 max-[412px]:flex-col '>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About us</li>
                    <li className='nav-item'>Contact us</li>
                </ul>
            </div>

            <div className="absolute right-8 top-8">
              <p className="nav-item" onClick={() => setMenuLocal(false)}>
                Close Menu
              </p>
            </div>
          
            <div className='container flex gap-10 max-sm:flex-col items-center justify-evenly pt-50 max-[412px]:pt-60 mx-auto'>
              <div>
                <h1 className='text-2xl font-light my-2'>Get In Touch</h1>
                <div>
                  <p className='my-3 font-light text-md'>call us</p>
                  <p className='text-p1 flex items-center justify-center'><span className='border-2 border-p1 rounded-full p-2 lg:p-3 mr-2'><Phone className='max-sm:w-4 max-sm:h-4 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-7 xl:h-7'/></span><span className='text-md md:text-lg cursor-pointer'>+91 6303 928 988</span></p>
                </div>
                <div>
                  <p className='my-3 font-light text-md'>Email us</p>
                  <p className='text-p1 flex items-center justify-center'><span className='border-2 border-p1 rounded-full p-2 lg:p-3 mr-2'><MdEmail className='max-sm:w-4 max-sm:h-4 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-7 xl:h-7'/></span><span className='text-md md:text-lg cursor-pointer'>+91 6303 928 988</span></p>
                </div>
              </div>

              {/* <div>
                <h1>Social Media</h1>
                <div>
                  <p>call us</p>
                  <p className='text-p1'><span className='border-2 border-p1 p-2 size-8 md:size-11 lg:size-15 flex items-center justify-center rounded-full'><FaLinkedin className='max-md:text-red-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'/></span><span>LinkedIn</span></p>
                  <p className='text-p1'><span><FaFacebook /></span><span>Facebook</span></p>
                  <p className='text-p1'><span><FaInstagram /></span><span>Instagram</span></p>
                </div>
              </div> */}

              <div>
                <h1 className='text-2xl font-light my-2'>Social Media</h1>
                <div className='my-4'>
                  <p className='text-p1 flex items-center gap-2 mt-2'><span className='border-2 border-p1 rounded-full p-2 lg:p-3'><FaLinkedin className='sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-7 xl:h-7'/></span><span className='text-md md:text-lg lg:text-xl cursor-pointer'>LinkedIn</span></p>
                  <p className='text-p1 flex items-center gap-2 mt-2'><span className='border-2 border-p1 rounded-full p-2 lg:p-3'><FaFacebook className='sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-7 xl:h-7'/></span><span className='text-md md:text-lg lg:text-xl cursor-pointer'>Facebook</span></p>
                  <p className='text-p1 flex items-center gap-2 mt-2'><span className='border-2 border-p1 rounded-full p-2 lg:p-3'><FaInstagram className='sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6 xl:w-7 xl:h-7'/></span><span className='text-md md:text-lg lg:text-xl cursor-pointer'>Instagram</span></p>
                </div>
              </div>
            </div>
          </motion.div>


        </motion.section>
      )}
    </AnimatePresence>
  )
}
