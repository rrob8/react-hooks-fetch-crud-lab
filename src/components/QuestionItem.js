import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete () {
    console.log(question.id)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:'DELETE',
    })
    .then(response=> response.json())
    onDeleteQuestion(question)
  }

  function handleChange (event) {
    const newAnswer = event.target.value
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method:"PATCH",
      headers:{ 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: newAnswer
      })
    })
    
    onUpdateQuestion(question)

  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}
        onChange={(event)=> handleChange(event)}
        >{options}</select>
      </label>
      <button
      onClick={handleDelete}
      >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
