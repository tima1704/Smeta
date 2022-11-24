import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '../../../Styles/authStyles/signup.module.css';
import { IshipngFields } from '../../../Types/AuthTypes/auth.interface';
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IshipngFields>();

  const onSubmit: SubmitHandler<IshipngFields> = (data) => {
    alert(`Your data => ${data}`);
    reset();
  };

  return (
    <div className={styles['container-form']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['unputs-block']}>
          <input
            {...register('email', {
              required: 'Email is require field',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Please enter valid email!'
              }
            })}
            type='email'
            placeholder='Your email'
          />
          {errors?.email && <p className={styles['errors_message']}>{errors.email.message}</p>}
          <input
            {...register('password', {
              required: 'Password is require field',
              minLength: {
                value: 5,
                message: 'Min length is 5'
              }
            })}
            type='password'
            placeholder='Your password'
          />
          {errors?.password && (
            <p className={styles['errors_message']}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles['button-block']}>
          <button>SIGN UP</button>
          <p>Create by Timur Ibatullin 22</p>
        </div>
      </form>
    </div>
  );
};
