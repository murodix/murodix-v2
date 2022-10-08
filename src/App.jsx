import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  const links = [
    {
      ref: "#about",
      desc: "About"
    },
    {
      ref: "#experience",
      desc: "Experience"
    },
    {
      ref: "#work",
      desc: "Work"
    }
  ]
  return (
    <div className={styles.app}  >
      <Navbar links={links} />
    </div>
  );
}

export default App;
