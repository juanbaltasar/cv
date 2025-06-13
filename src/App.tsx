import './i18n';
import { useTranslation } from 'react-i18next';
import './App.css'

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  // Helper to ensure array type for translation objects
  const getArray = (key: string) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };
  const getExpArray = () => {
    const value = t('experience', { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="cv-container">
      <header>
        <h1>{t('name')}</h1>
        <h2>{t('title')}</h2>
        <div className="cv-contact">
          <span>{t('address')}</span> | <span>{t('phone')}</span> | <span><a href={`mailto:${t('email')}`}>{t('email')}</a></span>
        </div>
        <button className="lang-btn" onClick={handleLanguageChange}>{t('changeLanguage')}</button>
      </header>
      <section>
        <h3>{i18n.language === 'es' ? 'Acerca de mí' : 'About Me'}</h3>
        <p>{t('about')}</p>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Objetivo Profesional' : 'Professional Objective'}</h3>
        <p>{t('objective')}</p>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}</h3>
        <ul>
          {getExpArray().map((exp: any, idx: number) => (
            <li key={idx}>
              <strong>{exp.role}</strong> - {exp.company} <em>({exp.date})</em><br />
              <span>{i18n.language === 'es' ? 'Tecnologías utilizadas:' : 'Technologies used:'} {exp.tech}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Formación Académica' : 'Education'}</h3>
        <ul>
          {getArray('education').map((ed: string, idx: number) => (
            <li key={idx}>{ed}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}</h3>
        <ul>
          {getArray('skills').map((sk: string, idx: number) => (
            <li key={idx}>{sk}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</h3>
        <ul>
          {getArray('projects').map((pr: string, idx: number) => (
            <li key={idx}>{pr}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Idiomas' : 'Languages'}</h3>
        <ul>
          {getArray('languages').map((lg: string, idx: number) => (
            <li key={idx}>{lg}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{i18n.language === 'es' ? 'Otros datos de interés' : 'Other Information'}</h3>
        <ul>
          {getArray('other').map((ot: string, idx: number) => (
            <li key={idx}>{ot}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App
