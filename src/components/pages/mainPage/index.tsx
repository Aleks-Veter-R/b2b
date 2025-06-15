import LandingLayout from '../../LandingLayout';
import Text, { ETextType } from '../../components/text';
import Button, { EButtonType } from '../../components/button';
import Icon, { EIconType } from '../../components/icon';
import './styles/index.scss';

const componentStyleName = 'page-main';

const textHeader = 
    'БИРЖА B2B - это платформа нового информационного и операционного уровня для активных продаж и покупок';
const secondHeader =
    'Для продажи своих и покупки нужных товаров';
const thirdHeader =
    'Платформа для активных продавцов и покупателей'

const MainPage = () => (
    <LandingLayout>
        <div className={componentStyleName}>
            <div className={`${componentStyleName}-section-title`}>
                <div>
                    <div className={`block-header-title`}>
                        <span className='yellow'>Покупай</span>
                        <span> и </span>
                        <span className='yellow'>продавай товары</span>
                        <span> за считанные минуты</span>
                    </div>
                    <div className={`block-header-text`}>
                        <Text
                            type={ETextType.Large}
                            text={textHeader}
                        />
                    </div>
                    <div className={`block-header-button`}>
                        <Button
                            type={EButtonType.YellowButton}
                            title='Начать торговлю'
                            onClick={() => null}
                        />
                    </div>
                    <div className={`block-companies`}>
                        <Icon type={EIconType.Company7} />
                        <Icon type={EIconType.Company6} />
                        <Icon type={EIconType.Company5} />
                        <Icon type={EIconType.Company4} />
                        <Icon type={EIconType.Company3} />
                        <Icon type={EIconType.Company2} />
                        <Icon type={EIconType.Company1} />
                    </div>
                    <div className={`block-image`}>
                        <Icon type={EIconType.MainImage} />
                    </div>
                </div>
            </div>
            <div className={`${componentStyleName}-section-info`}>
                <div>
                    <div className={`block-buying-and-selling`}>
                        <div>
                            <div className={`block-buying-and-selling-title`}>
                                {secondHeader}
                            </div>
                            <div className={`block-buying-and-selling-text`}>
                                <Text
                                    type={ETextType.Large}
                                    text={'БИРЖА B2B для вас'}
                                />
                            </div>
                            <div className={`block-buying-and-selling-table`}>
                                <p>
                                    <span>1</span> Государственные предприятия
                                </p>
                                <p>
                                    <span>2</span> Коммерческие предприятия
                                </p>
                                <p>
                                    <span>3</span> Производственные предприятия
                                </p>
                                <p>
                                    <span>4</span> Непроизводственные предприятия
                                </p>
                                <p>
                                    <span>5</span> Индивидуальные предприниматели
                                </p>
                            </div>
                        </div>
                        <div/>
                    </div>
                    <div className={`block-advantages`}>
                        <div className={`block-advantages-title`}>
                            {thirdHeader}
                        </div>
                        <div>
                            <div className={`block-advantages-info`}>
                                <div className='title'>
                                    Множество вариантов купли-продажи
                                </div>
                                <div className='text'>
                                    Покупатели и у Продавцы предлагают друг
                                    другу по 6 способов купли-продажи, что
                                    в сумме даёт каждому из них по 12
                                    вариантов продажи своих и покупки нужных товаров
                                </div>
                                <div className='image' />
                            </div>
                            <div className={`block-advantages-info`}>
                                <div className='title'>
                                    Платформа активных продаж и закупок
                                </div>
                                <div className='text'>
                                    Большой объём встречной информации позволяет
                                    Продавцам и Покупателям заниматься активными
                                    продажами и покупками, а при необходимости,
                                    выходить на связь друг с другом
                                </div>
                                <div className='image' />
                            </div>
                        </div>
                        <div>
                            <div className={`block-advantages-info`}>
                                <div className='title'>
                                    Множество стратегий для решения каждой задачи
                                </div>
                                <div className='text'>
                                    Объём информации и набор удобных инструментов
                                    позволяют рассматривать и реализовывать множество
                                    различных стратегий для решения каждой задачи
                                </div>
                                <div className='image' />
                            </div>
                            <div className={`block-advantages-info`}>
                                <div className='title'>
                                    Большой объём коммерчески важной информации
                                </div>
                                <div className='text'>
                                    70 пунктов коммерчески важной информации экономит
                                    значительные объёмы времени и денежных средств
                                    клиентов, а также принимать обоснованные решения
                                    о продаже и покупке.
                                </div>
                                <div className='image' />
                            </div>
                        </div>
                        <div>
                            <div className={`block-advantages-info`}>
                                <div className='title'>
                                    Удобные инструменты для торговли
                                </div>
                                <div className='text'>
                                    <ul>
                                        <li>
                                            Заказ на покупку
                                        </li>
                                        <li>
                                            Согласие на продажу по цене Покупателя
                                        </li>
                                        <li>
                                            Предложение Продавцу или Покупателю с торгом по любой из его цен
                                        </li>
                                        <li>
                                            Организация и участие в тендерах
                                        </li>
                                        <li>
                                            Организация и участие в конкурсах 
                                        </li>
                                        <li>
                                            Множество дополнительных способов
                                        </li>
                                    </ul>
                                </div>
                                <div className='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${componentStyleName}-section-help`}>
                <div>
                    <div className={`block-help-title`}>
                        {'Нужна наша помощь?'}
                    </div>
                    <div className={`block-help-items`}>
                        <div>
                            <div className={`title`}>
                                Помощь в чате 24/7
                            </div>
                            <div className={`text`}>
                                Пишите свой вопрос в чате и наш менеджер ответит вам в течение минуты
                            </div>
                        </div>
                        <div>
                            <div className={`title`}>
                                Ответы на вопросы
                            </div>
                            <div className={`text`}>
                                Также вы можете найти ответы на свои вопросы в блоке «Отвечаем на ваши вопросы заранее»
                            </div>
                        </div>
                        <div>
                            <div className={`title`}>
                                Заказать звонок
                            </div>
                            <div className={`text`}>
                                Закажите звонок бесплатно прямо сейчас и с вами свяжется наш менеджер
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LandingLayout>
)

export default MainPage;
