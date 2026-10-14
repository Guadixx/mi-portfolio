import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Nav.css';

const NAV_ITEMS = [
  { id: 'sobre-mi', label: 'About me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Nav() {
  const scrollToSection = useSmoothScroll();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className="nav">
      <span className="nav-mark"></span>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <button
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}