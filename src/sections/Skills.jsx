import './Skills.css';

const SKILL_GROUPS = [
  {
    items: [
      'Angular (11, 12, 16 & 17)',
      'React (16, 17 & 19)',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS',
      'SASS',
      'Bootstrap',
      'Material UI & Angular Material',
    ],
  },
  {
    items: ['Node.js', 'Express.js', 'Fast API', 'Python', 'Nginx'],
  },
  {
    items: [
      'MongoDB',
      'Firestore',
      'Cloud Datastore',
      'Cloud Run',
      'Firebase Auth.',
      'Docker',
    ],
  },
  {
    items: ['Github', 'NPM', 'Postman', 'Adobe Target', 'AEM', 'Omnibug'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-groups">
        {SKILL_GROUPS.map((group) => (
          <div className="skills-group">
            <ul className="skills-tags">
              {group.items.map((item) => (
                <li key={item} className="skills-tag">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}