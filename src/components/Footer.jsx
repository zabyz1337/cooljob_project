const CITIES = [
  'Осака',
  'Коясан',
  'Токио',
  'Хаконэ',
  'Наэба',
  'Томаму',
  'Йокогама',
  'Нагоя',
  'Саппоро',
  'Кобе',
];

export default function Footer() {
  return (
    <section id="section-footer">
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <span className="footer-label">Популярные города</span>
            <div className="cities-list">
              {CITIES.map((city) => (
                <a href="#" key={city}>
                  {city}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <div className="footer-logo">Cooljob</div>
            <div className="social-icons" aria-label="Соцсети">
              <a href="#" aria-label="LinkedIn">
                <img src="/assets/linkedin.svg" alt="" />
              </a>
              <a href="#" aria-label="Google">
                <img src="/assets/google.svg" alt="" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/assets/twitter.svg" alt="" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/assets/facebook-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
