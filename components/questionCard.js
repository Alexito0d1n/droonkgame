export default function QuestionCard(props) {

    let level
    switch (props?.question?.level) {
        case "easy":
            level = "easy";
            break;
        case "medium":
            level = "medium";
            break;
        case "hard":
            level = "hard";
            break;
        default:
            level = "easy";
            break;
    }

    return (
        <div className={`question-card ${level}`}>
            <div className="penalization-container">
                <span>{props?.question?.penalization ?? "No penalization"}</span>
            </div>
            <h3>
                {props?.question?.question ?? "Question is empty... That's weird 🤔"}
            </h3>
            <div className="type-container">
                <span>{props?.question?.type ?? "No type"}</span>
            </div>
        </div>
    )
  }