import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
            <main className="min-h-screen container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Made BY ANKUR PRAJAPATI
      </footer>

    </div>
  );
};

export default AppLayout;
