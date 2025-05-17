import { PropsWithChildren, useEffect } from 'react';
import Divider,  { EDividerType } from './components/divider';
import MainNavigation from './components/mainNavigation';
import Title, { ETitleType } from './components/title';
import Icon, { EIconType } from './components/icon';

const BasicThreeColumnLayout = (props: PropsWithChildren) => {
    return (
        <div className='root-parent'>
            <div className='root-header'>
                <MainNavigation />
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
                </div>
                <div className='root-body-main-content'>
                    {props.children}
                </div>
                <div className='root-body-left-sidebar'>
                    Это левый сайдбар....
                </div>
            </div>
            <div className='root-footer'>
                Это футер...
            </div>
        </div>
    );
}

export default BasicThreeColumnLayout;
