import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ToDoProvider } from './context/TodOContext.tsx';

createRoot(document.getElementById('root')!).render(
  <ToDoProvider>
    <App/>
  </ToDoProvider>
  
);