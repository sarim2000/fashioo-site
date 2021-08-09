import "./App.css";
import ThirdComponent from "./3rd-section/third.component";
import Header from "./section1/Header";
import Section1 from "./section1/Section1";
import Section5 from "./section5/Section5";
function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <ThirdComponent />
      <Section5 />
    </div>
  );
}

export default App;
