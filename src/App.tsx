import { Button } from "./components/ui/button";

const App = () => {
  return (
    <>
      <div className="h-100vh w-100vw bg-amber-600 text-center text-2xl">
        <h1 className="text-white">Hello World!</h1>
      </div>
      <div className="flex justify-center align-middle">
        <Button className="bg-violet-600 font-semibold text-white">
          Submit
        </Button>
      </div>
    </>
  );
};

export default App;
