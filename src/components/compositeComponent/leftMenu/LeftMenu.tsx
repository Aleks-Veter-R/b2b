import { FunctionComponent, useEffect } from 'react';
import { IPropsLeftMenu } from './interfaces';
import Icon, { EIconType } from '../../components/icon';
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import './styles/index.scss';

const componentStyleName = 'composite-component-left-menu';

const FormField: FunctionComponent<IPropsLeftMenu> = (props) => {
    const location = useLocation();
    
    useEffect(() => {
        // getTest('http://localhost:9090/test-rest');
        console.log(location);
        console.log(props);
    }, []);

    return (
        <div className={componentStyleName}>
            <div className={`${componentStyleName}-root-item`}>
                <div className={`${componentStyleName}-wrapper-item component-left-menu-current-item`}>
                    <a href='#'>
                        Продажа
                    </a>
                </div>
                <div className={`${componentStyleName}-chidren-list`}>
                    <div className={`${componentStyleName}-wrapper-item`}>
                        <Link to='/controlPanel/sales/createLot'>Создание лота</Link>
                    </div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои лоты</a></div>
                    <div className={`${componentStyleName}-parent component-left-menu-parent-open`}>
                        <div className={`${componentStyleName}-wrapper-item component-left-menu-current-item`}>
                            <a href='#'>Прямая продажа</a>
                            <Icon type={EIconType.Arrow} />
                        </div>
                        <div className={`${componentStyleName}-chidren-list`}> 
                            <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои аукционы</a></div>
                            <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои конкурсы</a></div>
                        </div>
                    </div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои аукционы</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои конкурсы</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Участие в аукционах друхи компаний</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Участие в конкурсах друхи компаний</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Бартер</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Давальческое сырье</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Товарные векселя</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Товар б/у</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Нелеквиды</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Интересные лоты на покупку</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Архив</a></div>
                </div>
            </div>
            <div className={`${componentStyleName}-root-item`}>
                <div className={`${componentStyleName}-wrapper-item`}>
                    <a href='#'>
                        Покупка
                    </a>
                </div>
                <div className={`${componentStyleName}-chidren-list`}>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Создание лота</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои лоты</a></div>
                    <div className={`${componentStyleName}-parent`}>
                        <div className={`${componentStyleName}-wrapper-item`}>
                            <a href='#'>Прямая продажа</a>
                            <Icon type={EIconType.Arrow} />
                        </div>
                        <div className={`${componentStyleName}-chidren-list`}> 
                            <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои аукционы</a></div>
                            <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои конкурсы</a></div>
                        </div>
                    </div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои аукционы</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Мои конкурсы</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Участие в аукционах друхи компаний</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Участие в конкурсах друхи компаний</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Бартер</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Давальческое сырье</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Товарные векселя</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Товар б/у</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Нелеквиды</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Интересные лоты на покупку</a></div>
                    <div className={`${componentStyleName}-wrapper-item`}><a href='#'>Архив</a></div>
                </div>
            </div>
        </div>
    );
};

export default FormField;
