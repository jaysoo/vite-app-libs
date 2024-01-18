// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Rlib1 } from '@vitewksp/rlib1';
import { Rlib2 } from '@vitewksp/rlib2';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="hello" />
      <Rlib1 />
      <Rlib2 />
    </div>
  );
}

export default App;
