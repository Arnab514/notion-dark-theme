// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Pricing = () => {
//   return (
//     <div className="dark-mode min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow p-4 md:p-8">
//         <section className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-primary">Pricing Plans</h1>
//           <p className="text-secondary mt-4">Choose a plan that suits your needs.</p>
//         </section>
//         <section>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Basic Plan</h3>
//               <p className="text-secondary mt-2">$10/month</p>
//               <p className="text-secondary mt-2">Includes basic features such as feature 1, feature 2, and feature 3.</p>
//               <button className="btn-neon">Sign Up</button>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Pro Plan</h3>
//               <p className="text-secondary mt-2">$30/month</p>
//               <p className="text-secondary mt-2">Includes all Basic features plus advanced features such as feature 4 and feature 5.</p>
//               <button className="btn-neon">Sign Up</button>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Enterprise Plan</h3>
//               <p className="text-secondary mt-2">$50/month</p>
//               <p className="text-secondary mt-2">Includes all Pro features plus premium features such as feature 6 and feature 7.</p>
//               <button className="btn-neon">Sign Up</button>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Pricing;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="dark-mode min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Pricing Plans</h1>
          <p className="text-secondary mt-4">Choose a plan that suits your needs.</p>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-primary">Basic Plan</h3>
              <p className="text-secondary mt-2">$10/month</p>
              <p className="text-secondary mt-2">Includes basic features such as feature 1, feature 2, and feature 3.</p>
              <button className="btn-neon">Sign Up</button>
            </div>
            <div className="card transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-primary">Pro Plan</h3>
              <p className="text-secondary mt-2">$30/month</p>
              <p className="text-secondary mt-2">Includes all Basic features plus advanced features such as feature 4 and feature 5.</p>
              <button className="btn-neon">Sign Up</button>
            </div>
            <div className="card transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-primary">Enterprise Plan</h3>
              <p className="text-secondary mt-2">$50/month</p>
              <p className="text-secondary mt-2">Includes all Pro features plus premium features such as feature 6 and feature 7.</p>
              <button className="btn-neon">Sign Up</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

