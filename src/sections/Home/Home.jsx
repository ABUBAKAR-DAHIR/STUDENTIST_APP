import { BookOpen, Edit, Lightbulb, Mail, MessageCircle, MessageSquare, Phone, Plus } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Menu from '../Menu/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { toggle, show, hide } from '../Menu/menuSlice'
import DialogBox from '../../components/DialogBox/DialogBox.jsx'
import {showDialog} from '../../components/DialogBox/dialogSlice.js'
import useSteps from '../../hooks/useSteps.jsx'
import { setCurrentStep } from './homeSlice.js'
// import {steps} from '../../constants/steps.js'
// import {Spinner} from '@uiball/loaders'
import { CgSpinner } from 'react-icons/cg'


export default function Home() {
    let [open, setOpen] = useState(false)
    let boxRef = useRef(null)
    let menu = useSelector((state) => state.menu.open)
    let dispatch = useDispatch()
    let dialogBox = useSelector((state) => state.dialogBox.open)
    let selections = useSelector((state) => state.selection.selections)
    let steps = useSteps()
    let currentStep = useSelector((state) => state.home.currentStep)
    

    useEffect(() => {
        function handleClick(event) {
            if(boxRef.current && !boxRef.current.contains(event.target)) setOpen(false)
        }
        
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [boxRef])

  return (
    <section className='h-screen w-full '>
      <div className='relative flex items-center justify-center h-full'>
        <motion.button 
            whileTap={{ scale: 0.9 }}  // shrink to 90% when pressed
            transition={{ type: 'spring', stiffness: 300, damping: 20 }} // smooth spring effect
            className='px-8 py-4 rounded-xl bg-p3 text-s2 cursor-pointer hover:bg-p3/75' onClick={() => dispatch(showDialog())}>Start Reading</motion.button>
        <div ref={boxRef} className='absolute bottom-8 left-4 w-xs bg-p1 hover:bg-p1/90 rounded-xl text-s1 max-md:w-[207px] '>
            <div className='flex justify-around py-6 px-5 cursor-pointer items-center max-md:py-4  max-md:px-6 max-md:justify-between' onClick={() => setOpen(!open)}>
                <MessageCircle className='max-md:w-[18px]' />
                <p className='font-semibold max-md:text-[13px] px-2'>Ask us any question</p>
                <div className={clsx('plus', open && 'rotate-45 absolute -top-1')}/>
            </div>

            {/* Expandable content */}
            <AnimatePresence>
                {
                    open && <motion.div
                        initial = {{height: 0, opacity: 0}}
                        animate = {{height: "auto", opacity: 1}}
                        exit = {{height: 0, opacity: 0}}
                        transition={{duration: 0.4}}
                        className={`flex flex-col gap-4 overflow-hidden max-md:text-md max-md:text-[12px]`}               
                    >
                        <div className="flex items-center gap-2 px-3 hover:text-p5">
                            <span className="icon-wrapper">
                                <Edit className='size-[17px]'/>
                            </span>
                            <p className='cursor-pointer'>Contribute notes</p>
                        </div>
                        <div className="flex items-center gap-2 px-3  hover:text-p5">
                            <span className="icon-wrapper">
                                <Lightbulb className='size-[17px]' />
                            </span>
                            <p className='cursor-pointer'>Suggest an idea</p>
                        </div>
                        <div className="flex items-center gap-2 px-3  hover:text-p5">
                            <span className="icon-wrapper">
                                <Phone className='size-[17px]' />
                            </span>
                            <p className='cursor-pointer'>Contact support for any app issues</p>
                        </div>
                        <div className="flex items-center gap-2 px-3  hover:text-p5">
                            <span className="icon-wrapper">
                                <Mail className='size-[17px]' />
                            </span>
                            <p className='cursor-pointer'>Send us feedback via email</p>
                        </div>
                        <div className="flex items-center gap-2 px-3  hover:text-p5">
                            <span className="icon-wrapper">
                                <BookOpen className='size-[17px]' />
                            </span>
                            <p className='cursor-pointer'>Explore tutorials & guides</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 pb-5  hover:text-p5">
                            <span className="icon-wrapper">
                                <MessageSquare className='size-[17px]' />
                            </span>
                            <p className='cursor-pointer'>Chat with our community</p>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>

        {/* Dialog */}
        {
            dialogBox && (
                <DialogBox
                    title={steps[currentStep].title} 
                    options={steps[currentStep].options}
                    step={currentStep}
                    loading={steps[currentStep].loading}
                    lastStep={currentStep == steps.length-1}
                    onNext={() => {if(currentStep < steps.length-1) dispatch(setCurrentStep((currentStep+1)))}}
                    onBack={() => {if(currentStep > 0) dispatch(setCurrentStep((currentStep-1)))}}
                    />
                )
                
            }
            {console.log(selections)}

        
        {/* Nav content */}
        <div className="absolute bottom-13 left-[calc(50%-100px)]">
            <ul className='flex gap-4 max-lg:hidden'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About us</li>
                <li className='nav-item'>Contact us</li>
            </ul>
            
        </div>
        <div className="absolute right-8 bottom-13">
            <p className='nav-item' onClick={() => dispatch(show())}>Menu</p>
        </div>

      </div>
            
      {
        menu && (
            <div className='absolute top-0 left-0 right-0 w-full'>
                <Menu />
            </div>
        )
      }

    </section>
  )
}
