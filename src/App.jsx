import { Outlet } from "react-router-dom";

import { Footer, Header } from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#EDF2F7] ">
        <Header />
        <main className="flex-grow ">
          <Outlet />
        </main>
        <Toaster position="bottom-right" toastOptions={{ duration: 1500 }} />
        <Footer />
      </div>
    </>
  );
}

export default App;
