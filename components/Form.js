import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [question, setQuestion] = useState("");
  const [level, setLevel] = useState("easy");
  const [category, setCategory] = useState("Challenge");
  const [penalty, setPenalty] = useState("1 sip");
  const [topic, setTopic] = useState("hot");
  const [languages, setLanguages] = useState("spanish");
  const apiKey = "tu-api-key"; 

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePenaltyChange = (event) => {
    setPenalty(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleLanguagesChange = (event) => {
    setLanguages(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (question.trim() === "") {
      return;
    }

    const formData = {
      question,
      level,
      category,
      penalty,
      topic,
      languages,
    };

    try {
      await axios.post(
        "https://https://eetjmjtdoscywvczuwwc.supabase.co/rest/v1/new_questions",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your-supabase-auth-token",
          },
        }
      );

      // Form data saved successfully
      setQuestion("");
      setLevel("easy");
      setCategory("Challenge");
      setPenalty("1 sip");
      setTopic("hot");
      setLanguages("spanish");
    } catch (error) {
      // Handle error
    }
  };

  const easyBorder = "#fcbf49";
  const mediumBorder = "#f77f00";
  const hardBorder = "#d62828";
  const deathBorder = "#b134eb";

  let borderColor;
  if (level === "easy") {
    borderColor = easyBorder;
  } else if (level === "medium") {
    borderColor = mediumBorder;
  } else if (level === "hard") {
    borderColor = hardBorder;
  } else {
    borderColor = deathBorder;
  }

  return (
    <div className="form-container">
      <h2>Add new cards to droonk!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Level:</label>
          <select value={level} onChange={handleLevelChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="death">Death</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={handleCategoryChange}>
            <option value="Challenge">Challenge</option>
            <option value="Never Have I Ever">Never Have I Ever</option>
            <option value="Who's More Likely To">Who's More Likely To</option>
            <option value="Minorities Drink">Minorities Drink</option>
            <option value="Mini Games">Mini Games</option>
            <option value="Sporty Games">Sporty Games</option>
            <option value="Question">Question</option>
            <option value="Events">Events</option>
          </select>
        </div>
        <div>
          <label>Penalty:</label>
          <select value={penalty} onChange={handlePenaltyChange}>
            <option value="2 sips">2 sips</option>
            <option value="4 sips">4 sips</option>
            <option value="6 sips">6 sips</option>
            <option value="1 shot">1 shot</option>
            <option value="2 shots">2 shots</option>
            <option value="3 shots">3 shots</option>
            <option value="piece of clothing">1 piece of clothing</option>
            <option value="clothes">X clothes</option>
          </select>
        </div>
        <div>
          <label>Topic:</label>
          <select value={topic} onChange={handleTopicChange}>
            <option value="hot">Hot</option>
            <option value="normalitas">Normalitas</option>
            <option value="arte">Beber</option>
          </select>
        </div>
        <div>
          <label>Language:</label>
          <select value={languages} onChange={handleLanguagesChange}>
            <option value="spanish">Spanish</option>
            <option value="english">English</option>
          </select>
        </div>
        <div>
          <textarea
            value={question}
            onChange={handleQuestionChange}
            style={{ borderColor }}
          />
        </div>
        <div className="button-container">
        <button className="button" type="submit" disabled={!question.trim()}>
          Agregar
        </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
