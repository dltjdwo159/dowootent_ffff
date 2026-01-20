
import React, { useState, useEffect } from 'react';
import { ViewState, Project, Service, SiteConfig } from './types';
import { INITIAL_CONFIG, INITIAL_SERVICES, INITIAL_PROJECTS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import PortfolioView from './views/PortfolioView';
import ContactView from './views/ContactView';
import AdminDashboard from './views/AdminDashboard';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [config, setConfig] = useState<SiteConfig>(INITIAL_CONFIG);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [services] = useState<Service[]>(INITIAL_SERVICES);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'HOME': return <HomeView setView={setView} projects={projects} services={services} />;
      case 'ABOUT': return <AboutView />;
      case 'SERVICES': return <ServicesView services={services} />;
      case 'PORTFOLIO': return <PortfolioView projects={projects} />;
      case 'CONTACT': return <ContactView config={config} />;
      case 'ADMIN': return <AdminDashboard config={config} setConfig={setConfig} projects={projects} setProjects={setProjects} />;
      default: return <HomeView setView={setView} projects={projects} services={services} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentView={view} setView={setView} config={config} />
      <main className="flex-grow pt-20">
        {renderView()}
      </main>
      <Footer config={config} setView={setView} />
    </div>
  );
};

export default App;
