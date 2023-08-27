import AllArticles from '../Components/AllArticles/AllArticles';
import Navbar from '../Components/Navbar/Navbar';
const Home = ({ id }) => {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <div className="container">
          <AllArticles  id={id} />
        </div>
      </main>
    </>
  );
};

export default Home;
