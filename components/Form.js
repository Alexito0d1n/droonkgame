import React, { useState, useContext } from "react";
import AppContext from "/context/AppContext";

function Form() {

  const { levels, topics, categories, languages, penalties } = useContext(AppContext);

  const [question, setQuestion] = useState("");
  const [level, setLevel] = useState(levels[0]?.id ?? 1);
  const [category, setCategory] = useState(categories[0]?.id ?? 1);
  const [penalty, setPenalty] = useState(penalties[0]?.id ?? 1);
  const [topic, setTopic] = useState(topics[0]?.id ?? 1);
  const [language, setLanguage] = useState(languages[0]?.id ?? 1);


  const resetForm = () => {
    setQuestion("");
    setLevel(levels[0]?.id ?? 1);
    setCategory(categories[0]?.id ?? 1);
    setPenalty(penalties[0]?.id ?? 1);
    setTopic(topics[0]?.id ?? 1);
    setLanguage(languages[0]?.id ?? 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (question.trim() === "") return;

    // FIXME: we should validate the user input

    const formData = {
      question: question,
      level_id: level,
      penalty_id: penalty,
      category_id: category,
      topic_id: topic,
      language_id: language,
    };

    try {
      const res = await fetch("/api/questions/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let resJSON = await res.json();

      if (!resJSON?.error) {
        resetForm();
        alert("Your card was saved successfully and will be reviewd shortly!")
      } else {
        alert(resJSON.error)
      }

    } catch (error) {
      console.log(error)
        alert("We couldn't save your card, please try again!")
    }
  };

  return (
    <div>
      <h2>Add new cards to droonk!</h2>
      <form className="new-question-form" onSubmit={handleSubmit}>
        <div>
          <label>Level:</label>
          <select value={level} onChange={e => setLevel(e.target.value)}>
            { levels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.name[0].toUpperCase() + level.name.substring(1)}
              </option>
            )) }
          </select>
        </div>
        <div>
          <label>Categories:</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
             { categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name[0].toUpperCase() + category.name.substring(1)}
              </option>
            )) }
          </select>
        </div>
        <div>
          <label>Penalties:</label>
          <select value={penalty} onChange={e => setPenalty(e.target.value)}>
             { penalties.map((penalty) => (
              <option key={penalty.id} value={penalty.id}>
                {`${penalty.amount} ${penalty.name}`}
              </option>
            )) }
          </select>
        </div>
        <div>
          <label>Topics:</label>
          <select value={topic} onChange={e => setTopic(e.target.value)}>
            { topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.name}
              </option>
            )) }
          </select>
        </div>
        <div>
          <label>Language:</label>
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            { languages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.name[0].toUpperCase() + language.name.substring(1)}
              </option>
            )) }
          </select>
        </div>
        <div>
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
            className={levels.filter(l => l.id === parseInt(level))[0]?.name ?? "easy"}
          />
        </div>
        <div className= "button-container">
        <button className="button" type="submit" disabled={question.trim() === ""}>
          Agregar
        </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
