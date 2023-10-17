import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [newQuestion, setNewQuestion] = useState('')

function addQuestion (newQuestion) {
  setNewQuestion(newQuestion)
}
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestion} /> : <QuestionList  />}
    </main>
  );
}

export default App;
