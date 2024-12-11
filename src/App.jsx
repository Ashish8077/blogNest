import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { Footer, Header, CustomInput, CustomBtn } from "./components";
function App() {
  // const auth = useSelector((state) => state.auth.status);
  // const userData = useSelector((state) => state.auth.userData);
  // console.log(auth);
  // console.log(userData);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#EDF2F7] ">
        <Header />
        <main className="flex-grow ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
