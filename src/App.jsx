import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useThemeStore } from "./store/useThemeStore"

export default function App() {
  const {theme} = useThemeStore();
  document.documentElement.classList.toggle("dark", theme === "dark")
  return (
    <main className="flex h-screen bg-blue-light dark:bg-secondary-dark pr-3">
      <Sidebar />
      <Navbar />
    </main>
  );
}