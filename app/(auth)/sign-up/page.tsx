import AuthForm from '@/components/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

const SignUp = async () => {
  let loggedInUser = null;
  
  try {
    loggedInUser = await getLoggedInUser();
    console.log('Logged-in User:', loggedInUser);
  } catch (error) {
    console.error('Error fetching logged-in user:', error);
  }

  return (
    <section className='flex-center size-full max-sm:px-6'>
      {/* Optionally pass loggedInUser to AuthForm if needed */}
      <AuthForm type='sign-up'/>
    </section>
  );
};

export default SignUp;
