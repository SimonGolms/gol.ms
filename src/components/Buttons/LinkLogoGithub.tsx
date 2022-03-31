import { IoLogoGithub } from 'react-icons/io5';

export const LinkLogoGithub: React.FC = () => {
  return (
    <a href="https://github.com/SimonGolms" rel="noopener noreferrer" target="_blank">
      <IoLogoGithub aria-label="Link Github" className="text-4xl text-black dark:text-white" />
    </a>
  );
};
