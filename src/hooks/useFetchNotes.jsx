import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function useFetchNotes(){
    let [subjects, setSubjects] = useState([])
    let [topics, setTopics] = useState([])
    let selections = useSelector((state) => state.selection.selections)
    
    useEffect(() => {
        async function fetchNotes() {
            try {
                const prefix = `https://storage.googleapis.com/studentistapp-99778.firebasestorage.app/parul university/${selections[0]}/${selections[1]}/faculty of engineering and technology/${selections[2] || ''}`
                let res = await axios.post("http://localhost:3000/filter/getNotesByPrefix", {
                    prefix: prefix
                })
                
                let {subjects, topics} = res.data.data
                setSubjects(subjects || [])
                setTopics(topics || [])
                
            } catch (error) {
                console.error("Error in fetching data: " + error.message);
                setSubjects([])
                setTopics([])
            }
        }
        selections.length >=2 && fetchNotes()
    }, [selections])
    
            
    return {subjects, topics}
}

