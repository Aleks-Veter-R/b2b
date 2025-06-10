import { FunctionComponent, useEffect } from 'react';
import Button, { EButtonType } from '../../components/button';
import Title, { ETitleType } from '../../components/title';
import Text, { ETextType } from '../../components/text';
import Icon, { EIconType } from '../../components/icon';
// import { Link } from "react-router";
import './styles/index.scss';

const componentStyleName = 'composite-component-company-card';

const CompanyCard: FunctionComponent = () => {
    return (
        <div className={componentStyleName}>
            <Title
                type={ETitleType.HeaderH3}
                text='ООО "Партнер"' />
            <Button
                type={EButtonType.LinkButton}
                title='Подробнее'
                onClick={() => null}
                linkTextType={ETextType.Large}
            />
            <div className={`${componentStyleName}-data-lots`}>
                <div>
                    <Icon type={EIconType.YellowDoc} />
                    <div>
                        <Text
                            type={ETextType.Large}
                            text='Лоты' />
                        <Text
                            type={ETextType.Large}
                            text='на продажу' />
                    </div>
                </div>
                <div>
                    <Icon type={EIconType.YellowProfile} />
                    <div>
                        <Text
                            type={ETextType.Large}
                            text='Лоты' />
                        <Text
                            type={ETextType.Large}
                            text='на покупку' />
                    </div>
                </div>
            </div>
            <div className={`${componentStyleName}-info`}>
                <div>
                    <Icon type={EIconType.YellowTube} />
                    <Text
                        type={ETextType.Large}
                        text='+7 (964) 506-90-90' />
                </div>
                <div>
                    <Icon type={EIconType.YellowAddress} />
                    <Text
                        type={ETextType.Large}
                        text='Сайт - www.record.ru' />
                </div>
                <div>
                    <Icon type={EIconType.YellowMail} />
                    <Text
                        type={ETextType.Large}
                        text='625030, г.Краснодар, ул. Пулова, д.23' />
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
