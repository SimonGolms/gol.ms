import { useEffect, useMemo, useState } from 'react';
import { Cursor } from './Cursor';

export type TypeWriterTextProps = {
  active?: boolean;
  duration: number;
  rotateSpeed: number; // How long typewriting animation show a full element
};

export const TypeWriterText: React.FC<TypeWriterTextProps> = ({ active = false, children, duration, rotateSpeed }) => {
  const [isWriting, setIsWriting] = useState(true);
  useEffect(() => {
    if (active) {
      setTimeout(() => setIsWriting(false), duration + rotateSpeed - 100);
    } else {
      setIsWriting(true);
    }
  }, [active, duration, rotateSpeed]);

  const statusClassNames = useMemo(() => {
    if (!active) {
      return 'invisible h-0 w-0';
    }
    if (isWriting) {
      return 'write';
    }
    return 'delete';
  }, [active, isWriting]);

  return (
    <>
      <div
        className={`text-2xl inline-block font-light text-black lg:text-5xl md:text-3xl  dark:text-white typewriter ${statusClassNames}`}
        style={{ animationDuration: `${duration}ms` }}
      >
        {children}
      </div>
      {active && <Cursor className="h-6 text-black lg:h-16 md:h-8 dark:text-white" />}
    </>
  );
};
