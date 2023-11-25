import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
        <FAQ />
        <h1>I am below the accordion menu!</h1>
      </div>
    </div>
  );
}

export default App;
