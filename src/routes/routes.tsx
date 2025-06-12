import { Routes, Route } from 'react-router';
import { Main } from '../components/Main';
import { Companies } from '../components/Companies';
import { Account } from '../components/Account';
// import { First } from '../components/First';
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
            path: '/account-page',
            element: <Account />,
        },
        {
            path: '/controlPanel/sales/createLot',
            element: <CreateLot />,
        },
        // {
        //     path: '/first',
        //     element: <First />,
        // },
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
