import { Logo, Button } from "/components";
import {useEffect, useState} from "react"
//import Link from "next/link";
//export default function App() {
  
export default function Config (){
  const [topics, setTopics] = useState([])
 const [isChecked, setIsChecked] = useState({ option1: false, option2: false })
     const toggle = ({ target: { name } }) =>
       setIsChecked({ ...isChecked, [name]: !isChecked[name] })
  
     // Are there any checked ones?
     const shouldShow = Object.values(isChecked).some(val => val)

    useEffect(() => {
      getTopics()
    }, [])

    const getTopics = async () => {
      let response = await fetch("/api/topics/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      let topics = await response.json();
      setTopics(topics);
    };
  
    return (
        <div className="topic-view-container">
          {topics
//            .sort((a, b) => (b.External ? -10 : 1))
            .map(topic => (
              
                <div key={topic.id}>
                <input type="checkbox" id="option" name="option" value={topic.id} onClick={() => null} />
                <label>{topic.name}</label>
              </div>
            ))}
        </div>
      );

  }


