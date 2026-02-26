const CATEGORIES = [
  { title: 'Финансы', iconSrc: '/assets/icon-finance.svg', iconAlt: 'Финансы' },
  {
    title: 'Грузоперевозки',
    iconSrc: '/assets/icon-truck.svg',
    iconAlt: 'Грузоперевозки',
  },
  { title: 'Дизайн', iconSrc: '/assets/icon-design.svg', iconAlt: 'Дизайн' },
  {
    title: 'Ресторанный\nбизнес',
    iconSrc: '/assets/icon-restaurant.svg',
    iconAlt: 'Ресторанный бизнес',
  },
  { title: 'Медицина', iconSrc: '/assets/icon-medicine.svg', iconAlt: 'Медицина' },
  {
    title: 'Мультимедиа',
    iconSrc: '/assets/icon-media.svg',
    iconAlt: 'Мультимедиа',
  },
  {
    title: 'Служба\nподдержки',
    iconSrc: '/assets/icon-support.svg',
    iconAlt: 'Служба поддержки',
  },
  { title: 'Менеджмент', iconSrc: '/assets/icon-management.svg', iconAlt: 'Менеджмент' },
  { title: 'Продажи', iconSrc: '/assets/icon-sales.svg', iconAlt: 'Продажи' },
];

export default function Categories() {
  return (
    <section id="section-categories">
      <div className="container">
        <h2 className="section-title">
          Работа <br />по категориям
        </h2>

        <div className="categories-grid">
          {CATEGORIES.map(({ title, iconSrc, iconAlt }) => (
            <div className="category-card" key={title}>
              <div className="cat-icon" aria-hidden="true">
                <img src={iconSrc} alt={iconAlt} />
              </div>
              <span className="cat-title">{title}</span>
            </div>
          ))}

          <div className="category-card more-card">
            <div className="cat-icon" aria-hidden="true">
              <img src="/assets/arrow-right.svg" alt="" />
            </div>
            <span className="cat-title">Больше\nкатегорий</span>
          </div>
        </div>
      </div>
    </section>
  );
}
