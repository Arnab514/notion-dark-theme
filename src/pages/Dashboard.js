// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Dashboard = () => {
//   return (
//     <div className="dark-mode min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow p-4 flex">
//         <aside className="w-1/4 bg-background p-4 rounded shadow border-r border-borderGray">
//           <nav>
//             <ul>
//               <li className="text-primary mb-2"><a href="/dashboard/projects">Projects</a></li>
//               <li className="text-primary mb-2"><a href="/dashboard/settings">Settings</a></li>
//             </ul>
//           </nav>
//         </aside>
//         <section className="flex-grow p-4 bg-background rounded shadow ml-4 border border-borderGray">
//           <h1 className="text-2xl font-semibold text-primary">Projects</h1>
//           <div className="mt-4">
//             <div className="p-4 bg-background rounded shadow mb-4 border border-borderGray">
//               <h3 className="text-xl font-semibold text-primary">Project 1</h3>
//               <p className="text-secondary mt-2">Description of project 1.</p>
//             </div>
//             <div className="p-4 bg-background rounded shadow mb-4 border border-borderGray">
//               <h3 className="text-xl font-semibold text-primary">Project 2</h3>
//               <p className="text-secondary mt-2">Description of project 2.</p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="dark-mode min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8 flex">
        <aside className="w-1/4 bg-background p-4 rounded shadow border-r border-borderGray">
          <nav>
            <ul>
              <li className="text-primary mb-2"><a href="/dashboard/projects">Projects</a></li>
              <li className="text-primary mb-2"><a href="/dashboard/settings">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <section className="flex-grow p-4 bg-background rounded shadow ml-4 border border-borderGray">
          <h1 className="text-2xl font-semibold text-primary">Projects</h1>
          <div className="mt-4">
            <div className="p-4 bg-background rounded shadow mb-4 border border-borderGray">
              <h3 className="text-xl font-semibold text-primary">Project 1</h3>
              <p className="text-secondary mt-2">Description of project 1. This project is aimed at achieving XYZ by implementing ABC functionalities.</p>
            </div>
            <div className="p-4 bg-background rounded shadow mb-4 border border-borderGray">
              <h3 className="text-xl font-semibold text-primary">Project 2</h3>
              <p className="text-secondary mt-2">Description of project 2. This project is aimed at achieving XYZ by implementing ABC functionalities.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
