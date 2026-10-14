import './Experience.css';

const EXPERIENCE = [
  {
    id: 'accenture',
    role: 'CRO Frontend Developer',
    company: 'Accenture',
    period: '2025 — Now',
    description: [
      'Built and deployed A/B test variants in Adobe Target, applying strong frontend expertise to ensure high-quality implementations.',
      'Recreated Figma designs in native JavaScript, ensuring pixel-perfect layouts and consistent behavior across environments.',
      'Inspected and captured analytics events using Omnibug, ensuring accurate event specification during QA.',
    ],
    technologies: ['JavaScript (ES6)', 'Adobe Target', 'HTML', 'CSS', 'Figma', 'Omnibug', 'Google Tag Assistant', 'Bootstrap', 'Jira'],
  },
  {
    id: 'saleshookup',
    role: 'Frontend Developer',
    company: 'Saleshookup',
    period: '2024 - 2025',
    description: [
      'Maintained and developed new features & functionalities for the main website.',
      'Migrated legacy JavaScript code to TypeScript, improving type safety and maintainability as well as redesigned application structure using Hexagonal Architecture.'
    ],
    technologies: ['React', 'React Hooks', 'Redux', 'Vite', 'MaterialUI', 'Typescript', 'React Testing Library', 'React Query', 'Node', 'Express', 'SpringBoot', 'Sentry', 'Mark-down' ],
  },
  {
    id: 'Exyt Control',
    role: 'Frontend Developer',
    company: 'Exyt Control',
    period: '2023 - 2024',
    description: [
      'Developed, optimized and maintained corporate sites.',
      'Refactored Exyts accredited management area and the QR code management app and improved UX/UI.'
    ],
    technologies: ['Angular', 'Typescript', 'HTML', 'CSS', 'Google Cloud Platform', 'Cloud Run', 'Artifact registry', 'Firestore'],
  },
  {
    id: 'Chattigo',
    role: 'Frontend Developer',
    company: 'Chattigo',
    period: '2022 - 2023',
    description: ['Maintaining and adding new functionalities into our corporate site.'],
    technologies: ['Angular', 'Typescript', 'HTML', 'CSS', 'Mockoon', 'Firebase'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">Experience</h2>
      <ul className="experience-list">
        {EXPERIENCE.map((item) => (
          <li key={item.id} className="experience-item">
            <span className="experience-period">{item.period}</span>
            <div>
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <ul className="experience-bullets">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.technologies?.length > 0 && (
                <div className="experience-tech">
                    <h4 className="experience-tech-label">Technologies</h4>
                    <p className="experience-tech-text">{item.technologies.join(', ')}</p>
                </div>
                )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}