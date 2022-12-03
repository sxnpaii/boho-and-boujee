// import './App.scss';
// additions
import { useRef, Suspense } from 'react';

// locomotive-scroll
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
// sections
import Hero from './sections/hero/Hero';
import Shopping from './sections/shopping/Shopping';
import About from './sections/about/About';
import Featured from './sections/featured/Featured';
// components
import Header from './components/Header/Header';
import Recomended from './components/recomended/Recomended';
import InstaFriends from './components/insta-friends/InstaFriends';
import SignUp from './components/sign-up/SignUp';
import Footer from './components/footer/Footer';

function App() {


  const containerRef = useRef(null);

  return (

    <Suspense >
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            }
          }


        }

        containerRef={containerRef}
      >

        <main className="App" data-scroll-container ref={containerRef}>
          <header>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <Header />
                </div>
              </div>
            </div>
          </header>
          <section className="Hero">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <Hero />
                </div>
              </div>
            </div>
          </section>
          <section className="Shopping" >
            <div className="container">
              <div className="row">
                <div className="col">
                  <Shopping />
                </div>
              </div>
            </div>
          </section>
          <section className="About" data-scroll data-scroll-speed="3" >
            <div className="container">
              <div className="row">
                <div className="col">
                  <About />
                </div>
              </div>
            </div>
          </section>
          <section className="Featured" >
            <div className="container">
              <div className="row">
                <div className="col">
                  <Featured />
                </div>
              </div>
            </div>
          </section>
          <section className="Recomend">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Recomended />
                </div>
              </div>
            </div>
          </section>
          <section className="IgFriends">
            <div className="container">
              <div className="row">
                <div className="col">
                  <InstaFriends />
                </div>
              </div>
            </div>
          </section>
          <section className="SignUp">
            <div className="container">
              <div className="row">
                <div className="col">
                  <SignUp />
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Footer />
                </div>
              </div>
            </div>
          </footer>
        </main>
      </LocomotiveScrollProvider>
    </Suspense >
  );
}
export default App;
