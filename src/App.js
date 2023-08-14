import Header from "./components/Header/Header";
import "./App.css";
import Categories from "./components/Categories/Categories";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories />
      <Content />
    </div>
  );
}

export default App;
