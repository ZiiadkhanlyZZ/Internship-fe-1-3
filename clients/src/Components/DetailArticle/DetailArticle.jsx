import { useEffect, useState } from 'react';
import './DetailArticle.scss';
import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { auth, db } from '../../firebase';
import Navbar from '../Navbar/Navbar';

const DetailArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articleRef = ref(db, `/${auth.currentUser.uid}/${id}`);
    onValue(articleRef, (snapshot) => {
      const articleData = snapshot.val();
      setArticle(articleData);
    });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="all-details">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <figure className="detail-image">
                <img src={article?.imageUrl} alt={article?.title} />
              </figure>
            </div>
            <div className="col-12 col-lg-6">
              <article className="detail-article">
                <h3>{article?.title}</h3>
                <p>{article?.description} </p>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <div className="experts-comment">
                <h4>Expert comment</h4>
                <p>{article?.comment} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailArticle;
