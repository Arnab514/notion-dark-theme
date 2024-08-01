// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <nav className="dark-mode p-4 flex justify-between items-center border-b border-borderGray shadow-lg">
//       <div className="flex items-center">
//         <img src="https://engineeringreallaws.wordpress.com/wp-content/uploads/2012/10/assignment.png" alt="Logo" className="w-8 h-8 mr-3"/>
//         <span className="text-primary text-xl font-bold">MyApp</span>
//       </div>
//       <div>
//         <Link to="/" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Home</Link>
//         <Link to="/pricing" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Pricing</Link>
//         <Link to="/dashboard" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Dashboard</Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`dark-mode p-4 flex justify-between items-center border-b border-borderGray shadow-lg transition-all duration-300 ${scrolled ? 'bg-background' : 'bg-transparent'}`}>
//       <div className="flex items-center">
//         <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-3"/>
//         <span className="text-primary text-xl font-bold">MyApp</span>
//       </div>
//       <div>
//         <Link to="/" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Home</Link>
//         <Link to="/pricing" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Pricing</Link>
//         <Link to="/dashboard" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Dashboard</Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <nav className={`dark-mode p-4 flex justify-between items-center border-b border-borderGray shadow-lg transition-all duration-300 ${scrolled ? 'bg-background' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <img src="https://engineeringreallaws.wordpress.com/wp-content/uploads/2012/10/assignment.png" alt="Logo" className="w-8 h-8 mr-3"/>
        <span className="text-primary text-xl font-bold">MyApp</span>
      </div>
      <div>
        <Link to="/" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Home</Link>
        <Link to="/pricing" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Pricing</Link>
        <Link to="/dashboard" className="text-primary mx-2 hover:text-neonGreen transition-colors duration-300">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Header;
