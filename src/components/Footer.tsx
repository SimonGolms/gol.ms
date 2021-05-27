import { LinkLogoGithub } from './Buttons/LinkLogoGithub';
import { LinkLogoLinkedIn } from './Buttons/LinkLogoLinkedIn';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-end w-screen gap-10 p-8 ">
      <LinkLogoLinkedIn />
      <LinkLogoGithub />
    </footer>
  );
};
