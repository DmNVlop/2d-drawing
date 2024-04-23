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
  //   E2000: () => navigate("/simple"),
  //   E2002: () => navigate("/simple"),
  //   E2003: () => navigate("/uct"),
  //   E2004: () => navigate("/lct"),
  // };
  // routeToMode[modo]();

  //     if (!woodyItem?.canva2d) return;
  //   } catch (error) {
  //     console.log("🚀 ~ handleGetWoody ~ error:", error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetWoody();
  // }, []);

  return (
    <>
      {/* <header id="header"> */}
      {/* <h1>Home App</h1> */}

      {/* <Link to="/drawer">To Drawer</Link>
      <Link to="/drawer1">To Drawer 1</Link>
      <br /> */}

      {/* <div className="title-sec">Seleccione un modelo...</div>
        <div className="data-sec">
          <Link to="/simple">
            <img
              src="/images/S.png"
              alt="Encimera Simple"
              title="Encimera Simple"
            />
          </Link>
          <Link to="/lct">
            <img src="/images/L_0.png" alt="Encimera L" title="Encimera L" />
          </Link>
          <Link to="/uct">
            <img src="/images/U_0.png" alt="Encimera U" title="Encimera U" />
          </Link>
        </div>*/}
      {/* </header> */}

      <div className="AppG">
        <RoutersApp />
      </div>
    </>
  );
}

export default App;
