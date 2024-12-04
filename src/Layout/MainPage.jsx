import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-grow h-screen w-screen bg-[url(disneyplus.jpeg)] bg-cover bg-no-repeat justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
