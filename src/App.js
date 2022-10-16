import { useState } from 'react';
import MyContext from './auth/MyContext';
import Router from './router';

function App() {
  const [logged, setLogged] = useState(false)
  

  return (
    <MyContext.Provider value={{logged, setLogged}}>
      <div className="App">
        <Router />
      </div>
    </MyContext.Provider>
  );
}

export default App;
