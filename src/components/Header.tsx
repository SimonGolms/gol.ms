import { ToggleTheme } from './Buttons/ToggleTheme';

export const Header: React.FC = () => {
  return (
    <header className="flex justify-end w-screen p-8 ">
      <ToggleTheme />
    </header>
  );
};
