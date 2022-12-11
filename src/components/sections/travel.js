import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const Travel = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section id="places">
      <h2 className="numbered-heading" ref={revealContainer}>
        Places I've lived and visited
      </h2>
      <div>
        <iframe
          align="center"
          title="GG Maps"
          src="https://www.google.com/maps/d/u/0/embed?mid=1mUjyRnIaij6Sgc0o3U_3zo8Q_8kLnuI&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </div>
    </section>
  );
};

export default Travel;
