import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials';
import About from './pages/about/About';
import Hero from './pages/hero/Hero';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [])

  return (
    <div className={styles.app}  >
      <Navbar links={data?.links} />
      <Socials socials={data?.socials} />
      <Hero />
      <About />
    </div>
  );
}

export default App;
