import logo from "./logo.svg";
import "./App.css";
import styles from "./Style";

function App() {
  return (
    <div className=" bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar
        </div>
      </div>



      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
    Hero
        </div>
      </div>


      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
    Hero
        </div>
      </div>





    </div>
  );
}

export default App;
