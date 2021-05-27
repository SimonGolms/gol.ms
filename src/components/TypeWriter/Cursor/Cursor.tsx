type Props = {
  className?: string;
};

export const Cursor: React.FC<Props> = ({ className = '' }) => {
  return (
    <div
      className={`${className} inline-block ml-0.5 border border-t-0 border-r-0 border-b-0 border-solid border-current animation-blink`}
    ></div>
  );
};
