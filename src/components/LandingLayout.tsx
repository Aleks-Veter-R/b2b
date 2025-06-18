import { PropsWithChildren, useEffect } from 'react';
// import { getTest } from '../../rests/rests/fetchFns'
import Divider,  { EDividerType } from './components/divider';
import MainNavigation, { EMainNavigationType } from './components/mainNavigation';
import Title, { ETitleType } from './components/title';
import Icon, { EIconType } from './components/icon';
import LeftMenu from './compositeComponent/leftMenu';
import Footer, { EFooterType } from './components/footer';
import { useLocation } from "react-router-dom";

const componentStyleName = 'landing-layout';

const LandingLayout = (props: PropsWithChildren) => {
    // const location = useLocation();

    useEffect(() => {
        // getTest('http://localhost:9090/test-rest');
        // console.log(location);
    }, []);

    return (
        <div className={`root-parent ${componentStyleName}`}>
            <div className='root-header'>
                <MainNavigation
                    type={EMainNavigationType.Landing}
                />
            </div>
            <div className='root-body'>
                {props.children}
            </div>
            <div className='root-footer'>
                <div>
                    <Footer type={EFooterType.Full} />
                </div>
            </div>
        </div>
    );
}

export default LandingLayout;
