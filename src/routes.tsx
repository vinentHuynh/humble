import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    component: <DrinkCreation />,
    title: 'Home'
  },
  {
    path: '/random-drink',
    component: <RandomDrink />,
    title: 'Try Me'
  }
]

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} element={route.component}></Route>
            );
          })
        }
      </Routes>
    </BrowserRouter>
  )
}