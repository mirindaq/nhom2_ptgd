import "bootstrap/dist/css/bootstrap.min.css";
import useRoute from "./routes/useRoute";

function App() {
  const object = useRoute();
  return <>{object}</>;
}

export default App;
