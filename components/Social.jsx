import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialMedia = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    path: "https://github.com/Teddy-FN",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    path: "https://www.linkedin.com/in/teddy-ferdian-abrar-amrullah",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialMedia.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
