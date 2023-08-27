import './AddData.scss';
import Navbar from '../../Components/Navbar/Navbar';
import { onValue, push, ref, set } from 'firebase/database';
import { auth, db } from '../../firebase';
import { useContext, useEffect, useState } from 'react';
import { mainContext } from '../../Contex/Contex';
import { Navigate } from 'react-router-dom';
const AddData = () => {
  const { todo, setTodo, setTodos, loading, setLoading } =
    useContext(mainContext);

  const [redirectToArticles, setRedirectToArticles] = useState(false);

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
  const handleAddData = async (e) => {
    e.preventDefault();
    const newTodoRef = push(ref(db, `/${auth.currentUser.uid}`));
    const newTodo = { ...todo, id: newTodoRef.key };
    await set(newTodoRef, newTodo);
    setTodo({
      title: '',
      imageUrl: '',
      description: '',
      comment: '',
    });
    setRedirectToArticles(true);
  };
  if (redirectToArticles) {
    return <Navigate to="/articles" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleInputChange = (e, field) => {
    setTodo((prevTodo) => ({ ...prevTodo, [field]: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <div className="add-data">
        <div className="container">
          <form className="form" onSubmit={handleAddData}>
            <div className="row">
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    value={todo.title}
                    onChange={(e) => handleInputChange(e, 'title')}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="image">Add Image</label>
                  <input
                    type="url"
                    name="imageUrl"
                    className="file"
                    value={todo.imageUrl}
                    onChange={(e) => handleInputChange(e, 'imageUrl')}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    placeholder="add description"
                    name="description"
                    value={todo.description}
                    onChange={(e) =>
                      handleInputChange(e, 'description')
                    }></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <label htmlFor="expertcomment">Expert comment:</label>
                  <textarea
                    name="comment"
                    id="expercomment"
                    placeholder="ExperComment"
                    value={todo.comment}
                    onChange={(e) =>
                      handleInputChange(e, 'comment')
                    }></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="input-form">
                  <button type="submit">Add data</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
