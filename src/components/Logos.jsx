export default function Logos() {
  return (
    <section id="section-logos">
      <div className="container logos-container">
        <span className="logos-label">Помогаем найти работу:</span>

        <div className="logos-grid" aria-label="Логотипы компаний">
          <img src="/assets/disney.svg" alt="Disney" className="logo-item" />
          <img
            src="/assets/facebook-wordmark.svg"
            alt="Facebook"
            className="logo-item"
          />
          <img
            src="/assets/microsoft.svg"
            alt="Microsoft"
            className="logo-item"
          />
          <img src="/assets/sony.svg" alt="Sony" className="logo-item" />
          <img
            src="/assets/cocacola.svg"
            alt="CocaCola"
            className="logo-item"
          />
        </div>
      </div>
    </section>
  );
}
