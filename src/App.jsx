import { Outlet } from "react-router-dom";

import { Footer, Header } from "./components";

function App() {
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
