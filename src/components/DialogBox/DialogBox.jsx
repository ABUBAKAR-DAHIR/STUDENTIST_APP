import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideDialog } from './dialogSlice'
import { MoveLeft } from 'lucide-react'
import clsx from 'clsx'
import { addSelection, clearSelection, popSelection, setCurrentPdf } from '../../sections/Home/selectionSlice'
import { useNavigate } from 'react-router-dom'
import { setCurrentStep } from '../../sections/Home/homeSlice'
import { CgSpinner } from 'react-icons/cg'


export default function DialogBox({options, title, loading, step, lastStep, onNext, onBack}) {
    let dispatch = useDispatch()
    let dialog = useSelector((state) => state.dialogBox.open)
    let [showDialog, setshowDialog] = useState(dialog)
    let selections = useSelector((state) => state.selection.selections)
    let navigate = useNavigate()


    useEffect(() => {
        if(!showDialog){
            setTimeout(() => {
                dispatch(hideDialog())
            }, 500);
        }
    }, [showDialog])
    const startReading = () => {
        let pdfUrl = `https://storage.googleapis.com/studentistapp-99778.firebasestorage.app/parul university/${selections[0]}/${selections[1]}/faculty of engineering and technology/${selections[2]}/${selections[3]}`
        dispatch(setCurrentPdf(pdfUrl))
    }

  return (
    <AnimatePresence>
        {
            showDialog && (
                <motion.div
                    initial={{opacity: 0, scale:0}}
                    animate={{opacity: 1, scale:1}}
                    exit={{opacity: 0, scale: 0}}
                    transition={{duration:0.5}}
                    className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-s1/80 z-10'
                    onClick={() => {setshowDialog(false); dispatch(clearSelection()); dispatch(setCurrentStep(0))}}
                    >
                    <motion.div
                        key="dialog"
                        initial={{opacity: 0, scale:0}}
                        animate={{opacity: 1, scale:1}}
                        exit={{opacity: 0, scale: 0}}
                        transition={{duration:0.5}}
                        className='relative py-8 px-4 rounded-xl bg-p1 flex flex-col items-center justify-center lg:w-[calc(25%-40px)] md:w-[calc(35%-40px)] sm:w-[calc(45%-40px)]'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className='text-s1 mt-4'>{lastStep ? 'Confirmation' : title}</p> 
                        {
                            loading ? 
                                <div className='w-full flex items-center justify-center py-3'>
                                        <CgSpinner speed={1} size={30} color='#198' className='animate-spin align-middle'/>
                                </div>
                                : 
                                <div className='flex flex-col w-full gap-1 my-3 mb-4'>
                                    {
                                        !lastStep ? options.map((option, index) => (
                                            <button key={index} className='list-button' onClick={() => {dispatch(addSelection(option)); onNext()}}>{option}</button>
                                        )):
                                        <p className='text-s1 text-center'>Read {selections[selections.length-1]} right now</p>
                                    }
                                </div>
                        }

                        {
                            !lastStep? <button className='px-8 py-4 rounded-xl bg-p3 text-s2 cursor-pointer hover:bg-p3/75' onClick={() => {setshowDialog(false); dispatch(clearSelection()); dispatch(setCurrentStep(0))}}>Close</button> : <button className='px-8 py-4 rounded-xl bg-p3 text-s2 cursor-pointer hover:bg-p3/75' onClick={() => {startReading(); navigate('/reader'); dispatch(clearSelection()); dispatch(setCurrentStep(0)); setshowDialog(false)}}>Start Reading</button>
                        }
                        <div className={clsx(step==0 ? 'hidden' : 'absolute top-4 left-4 rounded-full text-s1 cursor-pointer size-8 p-2 border-2 border-s1 flex items-center justify-center')} onClick={() => {dispatch(popSelection()); onBack()}}><MoveLeft /></div>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}


