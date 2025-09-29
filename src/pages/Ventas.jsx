import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Ventas() {
  return (
    <main className="flex h-screen bg-blue-light dark:bg-secondary-dark pr-3">
      <Navbar />
      <Sidebar />
      <section className="w-full mt-25 ml-2 mb-2 p-5 rounded-2xl border border-gray-200 shadow-lg bg-primary-light dark:bg-primary-dark dark:border-transparent dark:text-white">
        <h2>Ventas</h2>
      </section>
    </main>
  );
}

export default Ventas;