import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center p-4 border rounded-xl h-screen   ">
      <div className="text-2xl font-medium border p-4 rounded-2xl border-gray-600">
        Github Hesabı Ara
      </div>
      <Outlet />
    </div>
  );
}

export default App;
