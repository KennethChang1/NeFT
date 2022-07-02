const Article = ({ image, title, copy }) => {
  return (
    <div className="article-wrapper">
      <img
        className="article-logo"
        src={require(`../images/${image}.png`)}
        alt=""
      />
      <h4 className="article-title">{title}</h4>
      <p className="article-copy">{copy}</p>
    </div>
  );
};

export default Article;
