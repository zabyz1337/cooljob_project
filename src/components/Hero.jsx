export default function Hero() {
  return (
    <section id="section-hero">
      <div className="hero-bg-shape" aria-hidden="true">
        <img src="/assets/hero-shape.svg" alt="" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Один клик <br />и работа в кармане
          </h1>
        </div>

        <div className="search-bar" role="search">
          <div className="search-input-group">
            <div className="icon-wrapper">
              <img src="/assets/search.svg" alt="" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Должность или компания"
              className="search-input"
            />
          </div>

          <div className="divider" />

          <div className="search-input-group">
            <div className="icon-wrapper">
              <img src="/assets/location.svg" alt="" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Город, Страна"
              className="search-input"
            />
          </div>

          <button className="btn-search" type="button">
            Поиск
          </button>
        </div>
      </div>
    </section>
  );
}
