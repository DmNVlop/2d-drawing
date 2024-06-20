import "./countertop-page.css";

export default function CountertopHome() {
  return (
    <section id="ct-home">
      <div className="ct-home-container">
        <div className="ct-home-title">CONFIGURADOR DE ENCIMERAS</div>
        <p className="ct-home-subtitle">
          Personaliza tu encimera de cocina, toma el control para crear un
          espacio que refleje tu estilo y satisfaga tus necesidades.
        </p>

        <figure className="ct-figure-bg">
          <img
            className="ct-img-bg"
            src="/images/countertop-home-bg1.jpg"
            alt="Countertop Home"
            title="Countertop Home"
          />
        </figure>
      </div>
    </section>
  );
}
