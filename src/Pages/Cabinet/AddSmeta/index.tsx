import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddSmeta } from '../../../Hooks/useTodos/Todos';
import { ISmeta } from '../../../Types/TodoTypes/Todo.interface';

import styles from '../../../Styles/addTodo/index.module.css';

export const AddSmeta: React.FC = () => {
  const {
    register: verification,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<ISmeta>();

  const { isLoading: isDisabled, mutate } = useAddSmeta();

  const onSubmit: SubmitHandler<ISmeta> = (data) => {
    reset();
    mutate(data);
  };

  return (
    <div className={styles['addTodo_container']}>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...verification('title', { required: true })}
          type='text'
          placeholder='Title smeta..'
        />
        {errors.title && <p style={{ color: 'red' }}>Пустое поле..</p>}
        <input
          {...verification('author', {
            required: 'author is field!'
          })}
          type='text'
          placeholder='Introduce yourself..'
        />
        {errors.author && <p style={{ color: 'red' }}>Пустое поле..</p>}
        <button>{isDisabled ? '...' : 'add'}</button>
      </form>
    </div>
  );
};
