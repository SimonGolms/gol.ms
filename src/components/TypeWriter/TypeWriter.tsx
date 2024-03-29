import { useEffect, useMemo, useState } from 'react';
import { TypeWriterText } from './TypeWriterText';

export const TypeWriter: React.FC<TypeWriterProps> = ({ data, rotateSpeed = 2000, typeSpeed = 150 }) => {
  const dataItems = useMemo(() => {
    return data.map((text) => ({ duration: text.length * typeSpeed, text }));
  }, [data, typeSpeed]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const nextIndex = index >= dataItems.length - 1 ? 0 : index + 1;
    const timeout = dataItems[index].duration * 2 + rotateSpeed;

    // Time to switch to next text
    setTimeout(() => {
      setIndex(nextIndex);
    }, timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      {dataItems.map((item, itemIndex) => (
        <TypeWriterText key={item.text} active={itemIndex === index} duration={item.duration} rotateSpeed={rotateSpeed}>
          {item.text}
        </TypeWriterText>
      ))}
    </>
  );
};

type TypeWriterProps = {
  data: string[];
  rotateSpeed?: number; // How long typewriting animation show a full element
  typeSpeed?: number; // Speed of typewriting animation.
};
