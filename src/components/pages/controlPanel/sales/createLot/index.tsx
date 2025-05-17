import BasicThreeColumnLayout from '../../../../BasicThreeColumnLayout';
import Input, { EInputType } from '../../../../components/input';
import Button, { EButtonType } from '../../../../components/button';
import Divider, { EDividerType } from '../../../../components/divider';
import Title, { ETitleType } from '../../../../components/title';
import ButtonComposite, { EButtonCompositeType } from '../../../../compositeComponent/button-composite';
import FormField, { EFormFieldType } from '../../../../compositeComponent/form-field';
import './styles/index.scss';

const componentStyleName = 'page-create-lot-sale';

const CreateLotPage = () => (
    <BasicThreeColumnLayout>
        <div className={componentStyleName}>
            <Title
                type={ETitleType.HeaderH1}
                text='Лот на продажу' />
            <div className={`${componentStyleName}-main-info`}>
                <Title
                    type={ETitleType.HeaderH2}
                    text='Пшеница озимая твердых сортов' />
                <div className={`${componentStyleName}-main-info-body`}>
                    <div className={`${componentStyleName}-main-info-body-photo`}>
                        <Input
                            type={EInputType.InputFileImage}
                            imageType={['.png', '.jpeg', '.jpg']}
                            imageSizeMb={0.2}
                            onChange={(value) => console.log(value)}
                        />
                    </div>
                    <div className={`${componentStyleName}-main-info-body-content`}>
                        <div className={`${componentStyleName}-main-info-body-content-left`}>
                            <FormField
                                type={EFormFieldType.TextAreaField}
                                text='Описание:'
                                maxLength={10}
                                rows={3}
                                // value='300'
                                isActiveState={false}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='ГОСТ, ТУ:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Размеры:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Объём продажи:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Тара:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                        </div>
                        <div className={`${componentStyleName}-main-info-body-content-right`}>
                            <FormField
                                type={EFormFieldType.DropDownField}
                                text='Частота продаж:'
                                value={null}
                                itemList={[
                                    {title: 'Разово', value: 'Разово'},
                                    {title: 'Постоянно', value: 'Постоянно'},
                                ]}
                                onChange={(value) => console.log(value)}
                            />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Ед. изм.:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Мин. партия:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Состояние:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextMainField}
                                text='Гарант. срок:'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                        </div>
                    </div>
                </div>
            </div>
            <Divider type={EDividerType.Base} />
            <div className={`${componentStyleName}-terms-sale`}>
                <div>
                    <Title
                        type={ETitleType.HeaderH3}
                        text='Прямая продажа:' />
                    <div>
                        <FormField
                            type={EFormFieldType.InputField}
                            text='Цена при сумме от 0 до 0,8 млн. руб.'
                            // value='300'
                            onChange={(value) => console.log('value-1', value)} />
                        <FormField
                            type={EFormFieldType.InputField}
                            text='Цена при сумме от 0,801 до 2,5 млн. руб.'
                            onChange={(value) => console.log('value-2', value)} />
                        <FormField
                            type={EFormFieldType.InputField}
                            text='Цена при сумме от 2,501 до 7,5 млн. руб.'
                            onChange={(value) => console.log('value-3', value)} />
                        <FormField
                            type={EFormFieldType.InputField}
                            text='Цена при сумме от 7,501 до 27 млн. руб.'
                            onChange={(value) => console.log('value-4', value)} />
                        <FormField
                            type={EFormFieldType.InputField}
                            text='Цена при сумме 27,0 млн. руб. и более'
                            onChange={(value) => console.log('value-5', value)} />
                    </div>
                </div>
                <div>
                    <Title
                        type={ETitleType.HeaderH3}
                        text='Другие варианты:' />
                    <div>
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Аукцион'
                            firstTitle='Перейти'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Конкурс'
                            firstTitle='Перейти'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-2')}
                            onClickSecond={() => console.log('button-Удалить-2')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Бартер'
                            firstTitle='Перейти'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-3')}
                            onClickSecond={() => console.log('button-Удалить-3')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Давальч. сырье'
                            firstTitle='Перейти'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-4')}
                            onClickSecond={() => console.log('button-Удалить-4')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Товарные векселя'
                            firstTitle='Перейти'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-5')}
                            onClickSecond={() => console.log('button-Удалить-5')} />
                    </div>
                </div>
                <div>
                    <Title
                        type={ETitleType.HeaderH3}
                        text='Дополнительно:' />
                    <div>
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Товар б/у'
                            firstTitle='Создать'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Создать-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonField}
                            className='ButtonComposite'
                            title='Неликвид'
                            firstTitle='Создать'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Создать-2')}
                            onClickSecond={() => console.log('button-Удалить-2')} />
                    </div>
                </div>
            </div>
            <Divider type={EDividerType.Base} />
            <div className={`${componentStyleName}-additional-info`}>
                <div>
                    <Title
                        type={ETitleType.HeaderH3}
                        text='Дополнительная информация по лоту:' />
                    <div>
                        <div>
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='По производителю'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='По качеству товара'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='По оплате'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='Для более интерес. цен'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='Преим. работы с нами'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <ButtonComposite
                                type={EButtonCompositeType.TwoButtonField}
                                className='ButtonComposite'
                                title='Доп. предложения'
                                firstTitle='Перейти'
                                secondTitle='Удалить'
                                onClickFirst={() => console.log('button-Перейти-1')}
                                onClickSecond={() => console.log('button-Удалить-1')} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextField}
                                text='Продаём в месяц'
                                // value='300'
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextField}
                                text='Продаём в квартал'
                                // value='300'
                                isActiveState={true}
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.InputDifferentTextField}
                                text='Продаём в год'
                                // value='300'
                                onChange={(value) => console.log('value-1', value)} />
                        </div>
                        <div>
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='По фиксации цен'
                                onChange={(value) => console.log('value-1', value)} />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='По аккредитиву'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Продажа по графику'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Продажа с отсрочкой'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Продажа с рассрочкой'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Обмен проданного'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Возврат проданного'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Бесплатное хранение'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Доставка до скл. покупателя'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                            <FormField
                                type={EFormFieldType.CheckBoxField}
                                text='Долгосрочный договор'
                                // value={false}
                                onChange={(value) => console.log('value-1', value)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Title
                        type={ETitleType.HeaderH3}
                        text='Общая инф. от продавца:' />
                    <div>
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                        <ButtonComposite
                            type={EButtonCompositeType.TwoButtonFieldWithState}
                            className='ButtonComposite'
                            title='Общий прайс'
                            isActiveState={false}
                            firstTitle='Загрузить'
                            secondTitle='Удалить'
                            onClickFirst={() => console.log('button-Перейти-1')}
                            onClickSecond={() => console.log('button-Удалить-1')} />
                    </div>
                </div>
            </div>
            <div className={`${componentStyleName}-control-block`}>
                <Button
                    type={EButtonType.ActionButton}
                    title='Создать'
                    isInactive={false}
                    onClick={() => console.log('buttton onClick event')}
                />
            </div>
        </div>
    </BasicThreeColumnLayout>
)

export default CreateLotPage;
