import pilots from '../pilots.json';
import MainTitle from './MainTitle/MainTitle';
import PilotsList from './PilotsList/PilotsList';

function App() {
  return (
    <div style={
      {backgroundColor: "orange"}
    }>
      <MainTitle>The best pilots ever!</MainTitle>
      <PilotsList pilots={pilots} />
    </div>
  );
}

export default App;
