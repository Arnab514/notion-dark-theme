// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <div className="dark-mode min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow p-4 md:p-8">
//         <section className="text-center mb-8 border-b border-borderGray pb-8">
//           <h1 className="text-4xl font-bold text-primary">Welcome to Our Service</h1>
//           <p className="text-secondary mt-4">Your one-stop solution for all your needs.</p>
//           <button className="btn-neon">Get Started</button>
//         </section>
//         <section>
//           <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-borderGray pb-4">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 1</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 1. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 2</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 2. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 3</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 3. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <div className="dark-mode min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow p-4 md:p-8">
//         <section className="text-center mb-8 border-b border-borderGray pb-8">
//           <h1 className="text-4xl font-bold text-primary">Welcome to Our Service</h1>
//           <p className="text-secondary mt-4">Your one-stop solution for all your needs.</p>
//           <button className="btn-neon">Get Started</button>
//         </section>
//         <section>
//           <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-borderGray pb-4">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 1</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 1. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 2</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 2. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Feature 3</h3>
//               <p className="text-secondary mt-2">Detailed description of feature 3. This feature helps you achieve XYZ by providing ABC functionalities.</p>
//             </div>
//           </div>
//         </section>
//         <section>
//           <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-borderGray pb-4">Feature Highlights</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Highlight 1</h3>
//               <p className="text-secondary mt-2">Brief detail of highlight 1 with some interesting points.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Highlight 2</h3>
//               <p className="text-secondary mt-2">Brief detail of highlight 2 with some interesting points.</p>
//             </div>
//             <div className="card">
//               <h3 className="text-xl font-semibold text-primary">Highlight 3</h3>
//               <p className="text-secondary mt-2">Brief detail of highlight 3 with some interesting points.</p>
//             </div>
//           </div>
//         </section>
//         <section>
//           <h2 className="text-2xl font-semibold text-primary mb-4 border-b border-borderGray pb-4">Testimonials</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="card">
//               <p className="text-secondary mt-2">"This service is fantastic! It has greatly improved my workflow."</p>
//               <h3 className="text-xl font-semibold text-primary mt-2">- User 1</h3>
//             </div>
//             <div className="card">
//               <p className="text-secondary mt-2">"I love using this service. It's user-friendly and very efficient."</p>
//               <h3 className="text-xl font-semibold text-primary mt-2">- User 2</h3>
//             </div>
//             <div className="card">
//               <p className="text-secondary mt-2">"Highly recommend! Excellent features and great support."</p>
//               <h3 className="text-xl font-semibold text-primary mt-2">- User 3</h3>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="dark-mode min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <section className="text-center mb-8 border-b border-borderGray pb-8">
          <h1 className="text-4xl font-bold text-primary">Welcome to Our Service</h1>
          <p className="text-secondary mt-4">Your one-stop solution for all your needs.</p>
          <button className="btn-neon mt-4">Get Started</button>
        </section>
        
        <section className="my-8 py-8 border-b border-borderGray">
          <h2 className="text-2xl font-semibold text-primary mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Feature 1</h3>
              <p className="text-secondary mt-2">Detailed description of feature 1. This feature helps you achieve XYZ by providing ABC functionalities.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Feature 2</h3>
              <p className="text-secondary mt-2">Detailed description of feature 2. This feature helps you achieve XYZ by providing ABC functionalities.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Feature 3</h3>
              <p className="text-secondary mt-2">Detailed description of feature 3. This feature helps you achieve XYZ by providing ABC functionalities.</p>
            </div>
          </div>
        </section>

        <section className="my-8 py-8 border-b border-borderGray">
          <h2 className="text-2xl font-semibold text-primary mb-4">Feature Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Highlight 1</h3>
              <p className="text-secondary mt-2">Brief detail of highlight 1 with some interesting points.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Highlight 2</h3>
              <p className="text-secondary mt-2">Brief detail of highlight 2 with some interesting points.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary">Highlight 3</h3>
              <p className="text-secondary mt-2">Brief detail of highlight 3 with some interesting points.</p>
            </div>
          </div>
        </section>

        <section className="my-8 py-8 border-b border-borderGray">
          <h2 className="text-2xl font-semibold text-primary mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
              <p className="text-secondary mt-2">"This service is fantastic! It has greatly improved my workflow."</p>
              <h3 className="text-xl font-semibold text-primary mt-2">- User 1</h3>
            </div>
            <div className="card">
              <p className="text-secondary mt-2">"I love using this service. It's user-friendly and very efficient."</p>
              <h3 className="text-xl font-semibold text-primary mt-2">- User 2</h3>
            </div>
            <div className="card">
              <p className="text-secondary mt-2">"Highly recommend! Excellent features and great support."</p>
              <h3 className="text-xl font-semibold text-primary mt-2">- User 3</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
