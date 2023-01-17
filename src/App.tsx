import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center p-4 border rounded-xl bg-teal-400    ">
      <div>Github Hesabı Ara</div>
      <Outlet />
    </div>
  );
}

export default App;
