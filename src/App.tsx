import { BrowserRouter, Routes, Route } from 'react-router';

import Root from './components/Root';
import { Main } from './components/Main';

import './styles/App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root />}>
                    <Route index element={<Main />} />
                    {/* <Route
                        path='first-page'
                        element={<First />}
                    /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
