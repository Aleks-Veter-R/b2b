import { Routes, Route } from 'react-router';
import { Main } from '../components/Main';
import { Companies } from '../components/Companies';
import { First } from '../components/First';
import { CreateLot } from '../components/pages/controlPanel/sales/createLot/CreateLot';

const AppRoutes = () => {
    const navigationRouts = [
        {
            path: '/',
            element: <Main />,
        },
        {
            path: '/companies-page',
            element: <Companies />,
        },
        {
            path: '/first',
            element: <First />,
        },
        {
            path: '/controlPanel/sales/createLot',
            element: <CreateLot />,
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
