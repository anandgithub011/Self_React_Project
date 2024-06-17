import Display from "./components/Display";
import styles from "./App.module.css";
import BtnContainer from "./components/BtnContainer";

function App() {
  return (
    <div className={styles.container}>
      <Display></Display>
      <BtnContainer></BtnContainer>
    </div>
  );
}

export default App;
