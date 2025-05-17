import { Routes, Route } from 'react-router';
import { Main } from '../components/Main';
import { First } from '../components/First';

const AppRoutes = () => {
    const navigationRouts = [
        {
            path: '/',
            element: <Main />,
        },
        {
            path: '/first',
            element: <First />,
        },
        {
            path: '/controlPanel/sales/createLot',
            element: <First />,
        },
    ];

    return (
        <Routes>
            {navigationRouts.map((item) => {
                return (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                    />
                )
            })}
        </Routes>
    )
};

export default AppRoutes;
