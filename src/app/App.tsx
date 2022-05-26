import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@styles/global.scss';
import { Home } from '@pages/home';

import { useEffect } from 'react';
import { startup } from '@store/general';
import type { State } from '@store';

const App = () => {
  const dispatch = useDispatch();
  const { isReady } = useSelector((state: State) => state.general);

  useEffect(() => {
    dispatch(startup());
  }, []);

  if (isReady) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return <h2>Loading...</h2>;
};

export default App;
