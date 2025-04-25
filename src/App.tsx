import "./App.css";
import Hero_Section from "./components/Hero_Section";

function App() {
  return (
    <div className="flex flex-col bg-gray-50 mt-10 items-center justify-center h-screen">
      <h1 className="text-4xl text-center font-bold text-gray-900">
        Welcome to the Future of AI
      </h1>
      <Hero_Section />
    </div>
  );
}

export default App;
