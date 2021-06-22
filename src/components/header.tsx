import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex p-4 bg-sky-600 justify-between items-center text-gray-100">
      <h1 className="text-2x">Header です</h1>
      <ul className="flex">
        <li>
          <a href="#" className="block hover:bg-sky-300">
            <span>About</span>
          </a>
        </li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
