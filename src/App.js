import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Route/Route';
import './App.css';

function App() {
  return (
    <div className="w-full max-w-[1366px] mx-auto ">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
