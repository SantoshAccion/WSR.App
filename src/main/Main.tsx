import { Routes, Route } from 'react-router-dom';
import App from './../App';
import TestComponent from './../components/TestComponent';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/test' element={<TestComponent />} />
    </Routes>
  );
};
export default Main;
