import { useContext, useEffect } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import { mainContext } from '../../Contex/Contex';
import { auth, db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import { uid } from 'uid';
const AllArticles = ({ id }) => {
  const { todos, loading, setTodos, setLoading } = useContext(mainContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            setTodos(Object.values(data));
          }
          setLoading(false);
        });
      }
    });
  }, [setTodos]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      {todos?.map((item) => {
        return <ArticleItem item={item} key={item.id} id={id} />;
      })}
    </div>
  );
};

export default AllArticles;
