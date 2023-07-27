export default function QuestionCard(props) {
  const {
    id,
    question,
    penalty_name,
    penalty_description,
    penalty_amount,
    level_name,
    level_id,
    category_name,
    category_description,
    language_code,
  } = props?.question;

  let level;
  switch (level_name) {
    case "easy":
      level = "easy";
      break;
    case "medium":
      level = "medium";
      break;
    case "hard":
      level = "hard";
      break;
    case "death":
      level = "death";
      break;
    default:
      level = "easy";
      break;
  }

  return (
    <div className={`question-card ${level}`}>
      <div className="penalization-container">
        <span>
          {penalty_amount} {penalty_name ?? "No penalization"}
        </span>
      </div>
      <h3>{question ?? "Question is empty... That's weird 🤔"}</h3>
      <div className="type-container">
        <span>{category_name ?? "No category"}</span>
      </div>
      
    </div>
  );
}
