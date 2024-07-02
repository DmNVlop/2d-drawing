import RoutersApp from "./routes";

// const localStorageName = "woodyDataSelected";

// const history = unstable_HistoryRouter();

function App() {
  // let navigate = useNavigate();
  // const handleGetWoody = async () => {
  //   await getWoody();

  //   try {
  //     const woodyItem = JSON.parse(localStorage.getItem(localStorageName));

  //     if (!woodyItem?.tarifa) return;
  //     const modo = woodyItem.tarifa.sku;
  // const routeToMode = {
  //   E2000: () => navigate(simple"),
  //   E2002: () => navigate("/simple"),
  //   E2003: () => navigate("/uct"),
  //   E2004: () => navigate("/lct"),
  // };
  // routeToMode[modo]();

  //     if (!woodyItem?.canva2d) return;
  //   } catch (error) {
  //      console.log("⚠️ Error canva2d:", error)
  //   }
  // };

  // useEffect(() => {
  //   handleGetWoody();
  // }, []);

  return (
    <div className="AppG">
      <RoutersApp />
    </div>
  );
}

export default App;
