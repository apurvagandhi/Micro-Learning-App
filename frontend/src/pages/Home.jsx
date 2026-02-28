import { useState } from 'react';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FooterCTA from '../components/FooterCTA';
import AuthModal from '../components/AuthModal';

// modal state: null | 'login' | 'signup'
export default function Home() {
  const [modal, setModal] = useState(null);

  const openLogin  = () => setModal('login');
  const openSignup = () => setModal('signup');
  const closeModal = () => setModal(null);

  return (
    <>
      <Navbar onLogin={openLogin} onSignup={openSignup} />

      <main>
        <HeroSection onLogin={openLogin} onSignup={openSignup} />
        <FeaturesSection />
        <HowItWorksSection />
        <FooterCTA onSignup={openSignup} />
      </main>

      {modal && (
        <AuthModal initialTab={modal} onClose={closeModal} />
      )}
    </>
  );
}