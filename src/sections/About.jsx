import profilePhoto from '../assets/foto-cv.jpg';
import './About.css';

const HIGHLIGHTS = [
  {
    emoji: '💡',
    text: 'Curiosity and observation have taken me to search constantly for new challenges, experiences and learning. As a result, I find myself deeply fulfilled with developing web pages and mobile applications.',
  },
  {
    emoji: '🖇️',
    text: 'In particular, I am interested in pursuing a career as a Frontend Developer & UI designer.',
  },
  {
    emoji: '📱',
    text: 'I am dedicated to building intuitive and visually stunning interfaces that make a lasting impression. My attention to detail and strong problem-solving skills enable me to deliver high-quality work, even when faced with complex challenges.',
  },
  {
    emoji: '🧉',
    text: 'On my free time you can find me doing anything art related like music, painting, watching movies or playing The Sims.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="about-grid">
      <div className="about-photo">
        <img src={profilePhoto} alt="Retrato de Guadalupe" />
      </div>

      <div className="about-content">
        <h1 className="about-title">Guadalupe Doudchitzky Amadeo</h1>

        <ul className="about-highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.emoji} className="about-highlight">
              <span className="about-highlight-emoji">{item.emoji}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        
          <a href="/Guadalupe_Doudchitzky_Amadeo_2026_CV.pdf" download className="about-cv-button">Download CV</a>
      </div>
    </section>
  );
}