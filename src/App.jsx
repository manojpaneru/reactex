import Header from './components/Header/Header.jsx';
import Concepts from './components/Concepts.jsx';
import Examples from './components/Examples.jsx';

function App() {  
  return (
    // <div>
    //   <Header />
    //   <main>
    //     <Concepts />
    //     <Examples />
    //   </main>
    // </div>

  // Using Fragments
    <>
      <Header />
      <main>
        <Concepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
