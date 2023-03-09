import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, ValidationMode } from 'react-hook-form';
import * as Yup from 'yup';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function SignupPage() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });
  const formOptions = {
    mode: 'onBlur' as keyof ValidationMode,
    resolver: yupResolver(validationSchema),
  };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => {
    // e.preventDefault();
    alert(JSON.stringify(data));
  };
  return (
    <Layout>
      <Seo templateTitle='Signup' />

      <main>
        <section className='flex justify-center border'>
          <div className='flex w-10/12 flex-col items-center border'>
            <h4>Signup</h4>

            <div className='card my-2 w-10/12 border border-red-600 bg-base-100 p-2 shadow-xl'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control w-full '>
                  <label className='label'>
                    <span className='label-text'>First name?</span>
                  </label>
                  <input
                    type='text'
                    {...register('firstName')}
                    placeholder='First name'
                    className='input-bordered input w-full'
                  />

                  <div className='mt-1 ml-1 text-sm text-red-600 dark:text-red-500'>
                    {errors.firstName?.message?.toString()}
                  </div>
                </div>

                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text'>Last name?</span>
                  </label>

                  <input
                    type='text'
                    placeholder='Last name'
                    {...register('lastName')}
                    className='input-bordered input w-full'
                  />
                  <div className='mt-1 ml-1 text-sm text-red-600 dark:text-red-500'>
                    {errors.lastName?.message?.toString()}
                  </div>
                </div>
                <div className='form-control w-full'>
                  <label className='label'>
                    <span className='label-text'>Last name?</span>
                  </label>

                  <input
                    type='text'
                    placeholder='Email'
                    {...register('email')}
                    className='input-bordered input w-full'
                  />
                  <div className='mt-1 ml-1 text-sm text-red-600 dark:text-red-500'>
                    {errors.email?.message?.toString()}
                  </div>
                </div>
                <div className='form-group'>
                  <button type='submit' className='btn-primary btn mx-3'>
                    Register
                  </button>
                  <button
                    type='button'
                    onClick={() => reset()}
                    className='btn-secondary btn mx-3'
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
