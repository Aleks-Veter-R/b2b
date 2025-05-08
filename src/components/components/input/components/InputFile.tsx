import React, { FunctionComponent, useState, useRef } from 'react';
import { IPropsInputFileImage } from '../interfaces';
import Icon, { EIconType } from '../../icon';
import '../styles/index.scss';

const InputFile: FunctionComponent<IPropsInputFileImage> = (props) => {
    let [ isFileUpload, setIsFileUpload ] = useState(false);

    const image = useRef(null);

    let imageType = '.png, .jpg, .jpeg';

    if (props.imageType && props.imageType.length > 0) {
        imageType = props.imageType.join(', ');
    }

    let imageSize = 1024 * 1024; // Размер загружаемого файла 1 Mb

    if (props.imageSizeMb) {
        imageSize *= props.imageSizeMb;
    }

    // Валидация файла при выборе
    const onInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files[0].size > imageSize) {
            alert('Превышен допустимый размер файла');
            event.target.value = '';
          }
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files && event.target.files[0]) {
            setIsFileUpload(true);
            props.onChange(event.target.files[0]);

            let reader = new FileReader();

            reader.onload = function (e) {
                image.current.src = e.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const onDeleteImg = () => {
        setIsFileUpload(false);
        props.onChange(null);
    };

    return (
        <div className={props.className}>
            <div className='photo-img'>
                {!isFileUpload
                    ? <Icon type={EIconType.DefaultPhoto} />
                    : <img ref={image} />}
            </div>
            <div>
                <div className='add-photo-button'>
                    {!isFileUpload
                        ? (
                            <label className="input-file">
                                <input
                                    type='file'
                                    accept={imageType}
                                    onInput={onInputFile}
                                    onChange={onChangeInput}
                                />
                                <span>Загрузить</span>
                            </label>
                        ) : <span onClick={onDeleteImg}>Удалить</span>}
                </div>
            </div>
        </div>
    );
};

export default InputFile;
