// import logo from "./logo.svg";
import "./App.css";
import styles from "./Style";
import {    Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testinomial,
  Hero,


} from './Components'

function App() {
  return (
    <div className=" bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
          <Navbar/>
      </div>


      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
    <Hero/>       
    </div>
      </div> 

   

{/* 
<div className={`bg-black ${styles.paddingX} ${styles.flexStart} `}>
  <div className={`${styles.boxWidth}`}>
<Business/>
<Stats/>
<Billing/>
<CardDeal/>
<Testinomial/>
<Clients/>
<CTA/>
<Footer/>
  </div>

</div> */}


    </div>
  );
}

export default App;
