import { useState } from "react";

interface DropdownProps {
  title: string;
  content?: (string | { text: string; link?: string })[];
}

interface LinkAndClassProps {
  link: string;
  className: string;
  children: React.ReactNode;
}

const LinkAndClass: React.FC<LinkAndClassProps> = ({ link, className, children }) => {
  return (
    <li>
      <a href={link} className={className}>
        {children}
      </a>
    </li>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ title, content = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <p onClick={toggleDropdown} style={{ cursor: "pointer" }}>
        {title}
        <i
          className={`bi bi-chevron-${isOpen ? "up" : "down"} toggle-dropdown`}
          style={{ color: "#FD3379" }}
        ></i>
      </p>
      {isOpen && (
        <ul>
          {content.map((item, index) => {
            if (typeof item === "string") {
              return <li key={index}>{item}</li>;
            }

            const link = item.link || "#";
            return (
              <LinkAndClass key={index} link={link} className="dropdown-link">
                {item.text}
              </LinkAndClass>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
