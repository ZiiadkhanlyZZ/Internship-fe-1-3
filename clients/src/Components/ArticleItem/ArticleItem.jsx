import React from "react";
import { Link } from "react-router-dom";
import "./ArticleItem.scss";
const ArticleItem = ({ item,id }) => {
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <Link to={`/articles/${item?.id}`} className="card-link">
        <div className="card">
          <figure>
            <img src={item?.imageUrl} alt={item?.title} />
          </figure>
          <article>
            <h3>{item?.title}</h3>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default ArticleItem;
