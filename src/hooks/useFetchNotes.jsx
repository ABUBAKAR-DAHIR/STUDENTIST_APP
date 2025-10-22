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
                // let res = await axios.post("https://studentist-app-backend.onrender.com/filter/getNotesByPrefix", {
                //     prefix: prefix
                // })

                let resData = await fetch("https://studentist-app-backend.onrender.com/filter/getNotesByPrefix", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({prefix: prefix})
                })

                let res = await resData.json()
                
                let {subjects, topics} = res.data
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

