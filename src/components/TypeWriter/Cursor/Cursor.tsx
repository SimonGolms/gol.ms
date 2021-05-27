type Props = {
  className?: string;
};

export const Cursor: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${className} inline-block ml-0.5 border-l-2 border-solid border-current animation-blink`}></div>
  );
};
