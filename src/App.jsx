import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import WhatIsTrap from './pages/WhatIsTrap';
import HowToAim from './pages/HowToAim';
import Classes from './pages/Classes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/whatistrap" element={<Layout currentPageName="WhatIsTrap"><WhatIsTrap /></Layout>} />
        <Route path="/howtoaim" element={<Layout currentPageName="HowToAim"><HowToAim /></Layout>} />
        <Route path="/classes" element={<Layout currentPageName="Classes"><Classes /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;