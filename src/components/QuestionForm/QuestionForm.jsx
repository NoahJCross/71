import Button from "../Button/Button";
import "./questionform.css";

const QuestionForm = ({ onSubmit }) => {
  return (
    <form className="app__questionform" onSubmit={onSubmit}>
      <div className="form-group form-title">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" className="form-control" placeholder="Title..." />
      </div>

      <div className="form-group">
        <label htmlFor="question">Describe your problem</label>
        <textarea
          id="question"
          name="question"
          className="form-control"
          placeholder="Enter you question..."
          rows="15"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" name="tags" className="form-control" placeholder="Tags..." />
      </div>
      <div className="form-btn-container">
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
};

export default QuestionForm;
