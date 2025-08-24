import GlobalContext from './Context/GlobalContext';
import GlobalRouter from './Router/GlobalRouter';

function App() {
  return (
    <GlobalContext>
      <GlobalRouter />
    </GlobalContext>
  );
}

export default App;
