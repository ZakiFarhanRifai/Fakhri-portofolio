import useOnlineStatus from "./hooks/useOnlineStatus";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";

export default function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <Loading />;
  }

  return <Home />;
}
