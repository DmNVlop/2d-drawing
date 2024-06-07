import "./countertop-page.css";

export default function CountertopHome() {
  return (
    <section id="ct-home">
      <div className="ct-home-container">
        <div className="ct-home-title">CONFIGURADOR DE ENCIMERAS</div>
        <p className="ct-home-subtitle">
          Esta aplicación web te permite personalizar tu encimera de cocina,
          dándote el control para crear un espacio que refleje tu estilo y
          satisfaga tus necesidades.
        </p>

        <figure className="ct-figure-bg">
          <img
            className="ct-img-bg"
            src="/images/countertop-home-bg.jpg"
            alt="Countertop Home"
            title="Countertop Home"
          />
        </figure>
      </div>
    </section>
  );
}
