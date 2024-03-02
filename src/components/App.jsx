import pilots from '../pilots.json';
import MainTitle from './MainTitle';
import PilotsList from './PilotsList';

function App() {
  return (
    <div>
      <MainTitle>The best pilots ever!</MainTitle>
      <PilotsList pilots={pilots} />
    </div>
  );
}

export default App;
