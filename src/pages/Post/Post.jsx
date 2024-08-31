import { useState } from "react";
import PostSelector from "../../components/PostSelector/PostSelector";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import "./post.css";

const Post = () => {
  const [selectedPostType, setSelectedPostType] = useState("question");

  const handlePostTypeChange = (event) => {
    setSelectedPostType(event.target.value);
  };

  return (
    <div className="app__post">
      <SectionTitle title="New Post" />
      <PostSelector selectedPostType={selectedPostType} onSelect={handlePostTypeChange} />
      <SectionTitle title="What do you want to ask or share" />
      {selectedPostType === "question" ? <QuestionForm /> : <ArticleForm />}
    </div>
  );
};

export default Post;
