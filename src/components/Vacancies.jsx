const JOBS = [
  {
    tag: 'Финансы',
    dot: '#2F80ED',
    title: 'Менеджер по\nуправлению финансами\nв крупной компании',
    location: 'Осака, Япония',
    companyLogo: '/assets/sony.svg',
    companyText: 'Sony, 3 дня назад',
  },
  {
    tag: 'Продажи',
    dot: '#EB4BFF',
    title: 'Специалист по\nпродажам',
    location: 'Коясан, Япония',
    companyLogo: '/assets/facebook.svg',
    companyText: 'Facebook, 7 дней назад',
  },
  {
    tag: 'Служба поддержки',
    dot: '#3CCF4E',
    title: 'Оператор колл центра',
    location: 'Томаму, Япония',
    companyLogo: '/assets/cocacola-red.svg',
    companyText: 'CocaCola, 1 день назад',
  },
  {
    tag: 'Мультимедиа',
    dot: '#F2994A',
    title: 'Системный\nадминистратор',
    location: 'Токио, Япония',
    companyLogo: '/assets/sony.svg',
    companyText: 'Sony, 3 дня назад',
  },
  {
    tag: 'Дизайн',
    dot: '#EB5757',
    title: 'Дизайнер интерьера в\nпрофессиональную\nстудию в центре города',
    location: 'Йокогама, Япония',
    companyLogo: '/assets/facebook.svg',
    companyText: 'Facebook, 7 дней назад',
  },
  {
    tag: 'Грузоперевозки',
    dot: '#111111',
    title: 'Водитель на дальние\nдистанции',
    location: 'Кобе, Япония',
    companyLogo: '/assets/cocacola-red.svg',
    companyText: 'CocaCola, 1 день назад',
  },
];

export default function Vacancies() {
  return (
    <section id="section-vacancies">
      <div className="container">
        <h2 className="vacancies-title">Новые вакансии</h2>
        <p className="vacancies-subtitle">Найди работу своей мечты прямо сейчас</p>

        <div className="vacancies-grid">
          {JOBS.map((job) => (
            <div className="job-card" key={job.title}>
              <div className="job-header">
                <div className="job-tag-group">
                  <span className="tag-dot" style={{ background: job.dot }} />
                  <span className="job-tag">{job.tag}</span>
                </div>
              </div>

              <h3 className="job-title">{job.title}</h3>

              <div className="job-location">
                <img src="/assets/location-small.svg" alt="" aria-hidden="true" />
                <span>{job.location}</span>
              </div>

              <div className="job-footer">
                <img src={job.companyLogo} alt="" className="company-logo" />
                <span className="job-time">{job.companyText}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="all-vacancies-wrapper">
          <a className="btn-all-vacancies" href="#">
            Все вакансии
          </a>
        </div>
      </div>
    </section>
  );
}
