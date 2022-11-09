import { useEffect, useState } from 'react';
import s from './Home.module.css';
export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpen(!isOpen);
    }
  };

  const handleToogleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={s.sectionHome}>
      <div className={s.containerHome}>
        <h1 className={s.conteinerTitle}>A space to store contacts</h1>
        <button
          type="button"
          onClick={handleToogleModal}
          className={s.buttonHome}
        >
          {isOpen ? 'Close' : 'Instruction'}
        </button>

        {isOpen && (
          <div className={s.modal}>
            <ol className={s.listHome}>
              <li className={s.listItem}>
                Register first and we will be happy to save all your contacts
                here
              </li>
              <li className={s.listItem}>
                After the restration, we will write you down in our database
              </li>
              <li className={s.listItem}>
                You can save up to 1000 contacts here
              </li>
              <li className={s.listItem}>Contact names must be unique</li>
            </ol>
            <p>
              for more detailed information:
              <span className={s.spanText}>
                <a href="mailto:info@example.com">help@mail.com</a>
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
