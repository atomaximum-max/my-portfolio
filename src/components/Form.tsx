import React, { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';

import './Form.scss';

type FormInputs = {
  name: string;
  email: string;
  companyName?: string;
  tel: string;
  text?: string;
};

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEXP = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

interface FormProps {
  formClassName?: string;
  buttonClassName?: string;
  isModal?: boolean;
}

const Form: React.FC<FormProps> = ({ formClassName, isModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { tel, ...restData } = data;

    const dataToServer = {
      tel: tel.replace(/\D/g, ''),
      ...restData,
    };

    setIsLoading(true);

    try {
      const response = await fetch('https://your-api.com/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToServer),
      });

      if (response.ok) {
        toast.success('Заявка успешно отправлена!');
        reset();
      } else {
        throw new Error('Ошибка сервера');
      }
    } catch (error) {
      toast.error('Произошла ошибка при отправке. Попробуйте позже.');
      console.error('Form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    void handleSubmit(onSubmit)(evt);
  };

  return (
    <div className={`form__wrapper ${formClassName || ''}`}>
      <form
        className="form"
        id="feedback-form"
        noValidate
        onSubmit={handleFormSubmit}
      >
        <Input
          className="form__input"
          placeholder="Как к вам обращаться?*"
          gridArea="name"
          id="form-name"
          errorMessage={errors.name?.message}
          {...register('name', { required: 'Поле обязательно к заполнению' })}
        />

        <Input
          className="form__input"
          placeholder="Электронная почта*"
          gridArea="email"
          id="form-email"
          errorMessage={errors.email?.message}
          {...register('email', {
            required: 'Поле обязательно к заполнению',
            pattern: { value: EMAIL_REGEXP, message: 'Введите в формате email@mail.ru' },
          })}
        />

        <Input
          className="form__input"
          placeholder="Номер телефона*"
          gridArea="tel"
          id="form-tel"
          errorMessage={errors.tel?.message}
          {...register('tel', {
            required: 'Поле обязательно к заполнению',
            pattern: { value: PHONE_REGEXP, message: 'Введите в формате +7 (123) 456-78-99' },
          })}
        />

        <Input
          className="form__input"
          placeholder="Название компании"
          gridArea="companyName"
          id="form-company"
          errorMessage={errors.companyName?.message}
          {...register('companyName')}
        />

        <Textarea
          className="form__input"
          gridArea="text"
          placeholder="Задайте ваш вопрос"
          id="form-text"
          errorMessage={errors.text?.message}
          {...register('text')}
        />
      </form>

      <div className={`button__wrapper ${isModal ? 'button__wrapper--modal' : ''}`}>
        <Button
          type="submit"
          variant="primary"
          className="form__button"
          disabled={isLoading}
        >
          {isLoading ? 'Отправляем...' : 'Отправить'}
        </Button>

        <div className="hints">
          <p>*Поля обязательны к заполнению</p>
          <p>
            **Нажимая на кнопку «Оставить заявку» вы подтверждаете согласие на обработку
            персональных данных в соответствии с Федеральным законом РФ от 27 июля 2006 года
            № 152-ФЗ «О персональных данных»
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;