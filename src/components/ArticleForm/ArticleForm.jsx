import Button from "../Button/Button";
import "./articleform.css";

const ArticleForm = ({ onSubmit }) => {
  return (
    <form className="app__articleform" onSubmit={onSubmit}>
      <div className="form-group form-title">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" className="form-control" placeholder="Title..." />
      </div>

      <div className="form-group">
        <label htmlFor="abstract">Abstract</label>
        <textarea
          id="abstract"
          name="abstract"
          className="form-control"
          placeholder="Enter a 1 paragraph abstract..."
          rows="4"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="article">Article</label>
        <textarea
          id="article"
          name="article"
          className="form-control"
          placeholder="Enter you article here..."
          rows="10"
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

export default ArticleForm;
