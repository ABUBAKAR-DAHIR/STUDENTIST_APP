import React from 'react'
import useFetchNotes from "../hooks/useFetchNotes";
import { CgSpinner } from 'react-icons/cg';


export default function useSteps() {
  const {subjects, topics} = useFetchNotes()

  const loadingSpinner = () => (
    <div className='w-full flex items-center justify-center'>
      <CgSpinner speed={1} size={30} color='#198' className='animate-spin align-middle'/>
    </div>
  )
  
  const steps = [
    {
      title: "Please choose your year",
      options: ["year 1", "year 2", "year 3", "year 4"],
      nextStep: 1, // goes to step index 1
    },
    {
      title: "Choose your semester",
      options: ["semester 1", "semester 2"],
      nextStep: 2,
    },
    {
      title: "Choose your subject",
      options: subjects,
      loading: subjects.length === 0,
      spinner: loadingSpinner,
      nextStep: 3, 
    },
    {
      title: "Choose your topic",
      options: topics,
      loading: topics.length === 0,
      spinner: loadingSpinner,
      nextStep: null, // last step
    },
    
    {
      title: "confirmation",
      options: [],
      loading: false,
      spinner: null,
      nextStep: null, // confirmation
    },
  ];

  return steps
}

