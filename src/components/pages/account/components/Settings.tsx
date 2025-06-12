import React, { useState } from 'react';
import Text, { ETextType } from '../../../components/text';
import Input, { EInputType } from '../../../components/input';
import Button, { EButtonType } from '../../../components/button';
import Modal, { EModalType, EModalModeType } from '../../../components/modal';
import Title, { ETitleType } from '../../../components/title';
import Icon, { EIconType } from '../../../components/icon';

const SettingChapter = () => {
    const [ modalMode, setModalMode ] = useState<EModalModeType>(EModalModeType.Close);
    const [ oldPass, setOldPass ] = useState<string>('');
    const [ newPass, setNewPass ] = useState<string>('');
    const [ newRetryPass, setNewRetryPass ] = useState<string>('');

    const [ isSendPass, setIsSendPass ] = useState<boolean>(false);
    const [ isPendingPass, setIsPendingPass ] = useState<boolean>(false);
    const [ isErrorSendPass, setIsErrorSendPass ] = useState<boolean>(false);
    const [ isSuccesSendPass, setIsSuccesSendPass ] = useState<boolean>(false);

    const onSendPass = () => {
        setIsSendPass(true);
        setIsPendingPass(true);

        new Promise((resolve, reject) => {
            setTimeout(
                reject,
                2000
            )
        }).then(() => {
            setIsSuccesSendPass(true);
            setIsErrorSendPass(false);
            setIsPendingPass(false);
        }).catch(() => {
            setIsSuccesSendPass(false);
            setIsErrorSendPass(true);
            setIsPendingPass(false);
        })
    }

    return (
        <>
            <Text
                type={ETextType.Large}
                text={'Настройки учетной записи'}
            />
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'E-mail.ru'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'ИНН'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'КПП'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Название компании'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Короткое название компании'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Почтовый адрес'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Юридический адрес'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Основной вид деятельности'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'ОКВЭД'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Система налогообложения'}
                />
            </div>
            <div
                className='input-checkbox-field'
            >
                <div>
                    <Input
                        type={EInputType.CheckBox}
                        onChange={(value) => console.log(value)}
                        checked={true}
                    />
                    <Text
                        type={ETextType.Small}
                        text={'Получать уведомления по смс'}
                    />
                </div>
                <div>
                    <Input
                        type={EInputType.CheckBox}
                        onChange={(value) => console.log(value)}
                        checked={true}
                    />
                    <Text
                        type={ETextType.Small}
                        text={'Получать уведомления по E-mail'}
                    />
                </div>
            </div>
            <div
                className='control-field'
            >
                <Button
                    type={EButtonType.YellowButton}
                    title='Подписать УКЭП'
                    onClick={() => null}
                />
                <Button
                    type={EButtonType.YellowButton}
                    title='Изменить пароль'
                    onClick={() => setModalMode(EModalModeType.Open)}
                />
            </div>
            <Modal
                type={EModalType.BlackModal}
                mode={modalMode}
                toggleModal={() => {
                    if (!isSendPass) setModalMode(EModalModeType.Close)
                }}
            >
                <div className='change-pass'>
                    <Title
                        type={ETitleType.HeaderH1}
                        text='Измение пароля' />
                    {!isSendPass ? (<>
                            <Input
                                type={EInputType.Text}
                                placeholder='Введите старый пароль'
                                value={oldPass}
                                onChange={(value) => setOldPass(value as string)}
                            />
                            <Input
                                type={EInputType.Text}
                                placeholder='Введите новый пароль'
                                value={newPass}
                                onChange={(value) => setNewPass(value as string)}
                            />
                            <Input
                                type={EInputType.Text}
                                placeholder='Повторите новый пароль'
                                value={newRetryPass}
                                onChange={(value) => setNewRetryPass(value as string)}
                            />
                            <div>
                                <Button
                                    type={EButtonType.YellowButton}
                                    title='Сохранить'
                                    onClick={onSendPass}
                                />
                                <Button
                                    type={EButtonType.YellowButton}
                                    title='Отменить'
                                    onClick={() => {
                                        setModalMode(EModalModeType.Close);
                                        setIsSendPass(false);
                                        setIsSuccesSendPass(false);
                                        setIsErrorSendPass(false);
                                        setIsPendingPass(false);
                                        setOldPass('');
                                        setNewPass('');
                                        setNewRetryPass('');

                                    }}
                                />
                            </div>
                        </>) : isPendingPass ? (
                                <div className='change-pass-pending'>
                                    <Text
                                        type={ETextType.Small}
                                        text={'Сохранение изменений...'}
                                    />
                                </div>
                            ) : isErrorSendPass ? (
                                <div className='change-pass-error'>
                                    <Icon type={EIconType.Ok} />
                                    <Text
                                        type={ETextType.Small}
                                        text={'Ошибка сохранения! Попробуйте изменить пароль позже...'}
                                    />
                                    <Button
                                        type={EButtonType.YellowButton}
                                        title='Спасибо!'
                                        onClick={() => {
                                            setModalMode(EModalModeType.Close);
                                            setIsSendPass(false);
                                            setIsSuccesSendPass(false);
                                            setIsErrorSendPass(false);
                                            setIsPendingPass(false);
                                            setOldPass('');
                                            setNewPass('');
                                            setNewRetryPass('');

                                        }}
                                    />
                                </div>
                            ) : isSuccesSendPass ? (
                                <div className='change-pass-success'>
                                    <Icon type={EIconType.Ok} />
                                    <Text
                                        type={ETextType.Small}
                                        text={'Изменения внесены'}
                                    />
                                    <Button
                                        type={EButtonType.YellowButton}
                                        title='Спасибо!'
                                        onClick={() => {
                                            setModalMode(EModalModeType.Close);
                                            setIsSendPass(false);
                                            setIsSuccesSendPass(false);
                                            setIsErrorSendPass(false);
                                            setIsPendingPass(false);
                                            setOldPass('');
                                            setNewPass('');
                                            setNewRetryPass('');

                                        }}
                                    />
                                </div>
                            ) : null
                    }
                </div>
            </Modal>
        </>
    )
}

export default SettingChapter;
