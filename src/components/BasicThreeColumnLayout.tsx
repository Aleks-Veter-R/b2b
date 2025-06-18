import { PropsWithChildren, useEffect } from 'react';
import { getTest } from '../../rests/rests/fetchFns'
import Divider,  { EDividerType } from './components/divider';
import MainNavigation, { EMainNavigationType } from './components/mainNavigation';
import Title, { ETitleType } from './components/title';
import Icon, { EIconType } from './components/icon';
import LeftMenu from './compositeComponent/leftMenu';
import Footer, { EFooterType } from './components/footer';
import { useLocation } from "react-router-dom";

const componentStyleName = 'basic-three-column-layout';

const BasicThreeColumnLayout = (props: PropsWithChildren) => {
    const location = useLocation();

    useEffect(() => {
        getTest('http://localhost:9090/test-rest');
        console.log(location);
    }, []);

    return (
        <div className={`root-parent ${componentStyleName}`}>
            <div className='root-header'>
                <MainNavigation
                    type={EMainNavigationType.Default}
                />
            </div>
            <div className='root-body'>
                <div className='root-body-right-sidebar'>
                    <div className='composite-component-icon-title'>
                        <Icon type={EIconType.ControlPanel} />
                        <Title
                            type={ETitleType.HeaderH4}
                            text='Панель управления'
                        />
                    </div>
                    <div className='divider-wrapper-left-sidebar-header'>
                        <Divider type={EDividerType.Default} />
                    </div>
                    <LeftMenu
                        treeData={[]}
                    />
                </div>
                <div className='root-body-main-content'>
                    {props.children}
                </div>
                <div className='root-body-left-sidebar'>
                    Это левый сайдбар....
                </div>
            </div>
            <div className='root-footer'>
                <div>
                    <Footer type={EFooterType.Mini} />
                </div>    
            </div>
        </div>
    );
}

export default BasicThreeColumnLayout;
