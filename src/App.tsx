/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BottomNav, Tab } from './components/BottomNav';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { Habits } from './pages/Habits';
import { Collection } from './pages/Collection';
import { Profile } from './pages/Profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <TopBar 
        title="治愈花园" 
        showSun={activeTab === 'home'} 
        showSettings={activeTab === 'profile'} 
      />
      
      {activeTab === 'home' && <Home />}
      {activeTab === 'habits' && <Habits />}
      {activeTab === 'collection' && <Collection />}
      {activeTab === 'profile' && <Profile />}

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
