import { Badge } from './stories/components/Badge';
import { Header } from './stories/components/Header';

function App() {
  return (
    <>
      <Header
        user={{ name: 'Jane Doe' }}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <h1 className="text-3xl font-bold p-4">Hello world!</h1>
      <p className="mt-2 text-gray-600 p-6">Welcome to your Storybook demo.</p>
      <Badge label="New" variant="success" size="large" />
    </>
  );
}

export default App;
