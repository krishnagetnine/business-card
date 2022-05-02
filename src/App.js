import logo from "./logo.svg";
import "./App.css";
import MyCard from "./components/CardWrapper";
import Footer from "./components/footer";

function App() {
  return (
    <div className="my--card">
      <MyCard />
      <Footer />
    </div>
  );
}

export default App;
