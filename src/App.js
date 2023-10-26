import { Provider } from 'react-redux';
import store from './utils/store';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import Watch from './component/Watch';
import ErrorPage from './component/ErrorPage';

const appRoute = createBrowserRouter([
  {
    path:"/",
    errorElement:<ErrorPage />,
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer />

      },
      {
        path:'watch',
        element:<Watch />

      },
    ]
  }
])

function App() {
  return (
    <div > 
      <Provider store={store} >
      <Header />
      <RouterProvider router={appRoute} />
      </Provider>
    </div>
  );
}

export default App;
