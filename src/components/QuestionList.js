import React,  {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(response=> response.json())
    .then(data=> setQuestions(data))
  },[])

  function deleteQuestion (deletedQuestion) {
    const newQuestions = questions.filter((question) => question.id !== deletedQuestion.id) 
    setQuestions(newQuestions)
  }

  function updateQuestion (updatedQuestion) {
   const updatedQuestions = questions.map((question)=>{
    if (question.id === updatedQuestion) {
      return updatedQuestion
    }
    else {
      return question
    }
   })
   setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>
       <QuestionItem 
       key={question.id} 
      question={question}
      onDeleteQuestion={deleteQuestion}
      onUpdateQuestion={updateQuestion}
      />)}</ul>
    </section>
  );
}

export default QuestionList;
