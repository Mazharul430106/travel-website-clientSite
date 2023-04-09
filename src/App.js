import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Route/Route';
import './App.css';

function App() {
  return (
    <div className="w-full mx-auto lg:max-w-[1366px] bg-[#F5F5F5]">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
