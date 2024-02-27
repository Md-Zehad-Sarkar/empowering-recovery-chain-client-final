import Container from "./components/container/Container";
import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { themeMode } = useAppSelector((state) => state.theme);

  return (
    <Container className={themeMode === true ? "bg-black" : "bg-white"}>
      <MainLayout />
    </Container>
  );
}

export default App;
