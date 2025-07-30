import { ThemeProvider } from "./components/chatbot/theme-provider";
import DestinationsPage from "./pages/maps";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="easydiymurphybed-theme">
      <DestinationsPage />
    </ThemeProvider>
  );
}

export default App;
