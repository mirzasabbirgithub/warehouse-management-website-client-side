import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Pages/Loading/Loading';
const SocialLogin = () => {
          const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
          const navigate = useNavigate();

          let getError;
          //navigeting
          if (user) {
                    navigate('/home');
          }

          //loading spinner
          if (loading) {
                    return <Loading></Loading>
          }

          //show error message
          if (error) {
                    getError = <div>
                              <p className='text-danger'>{error.message}</p>
                    </div>
          }
          return (
                    <div>
                              <div className='d-flex align-items-center'>
                                        <div style={{ height: '1px' }} className='bg-success w-50'></div>
                                        <p className='mt-2 px-2'>OR</p>
                                        <div style={{ height: '1px' }} className='bg-success w-50'></div>
                              </div>
                              {getError}
                              <div className=''>
                                        <button
                                                  onClick={() => signInWithGoogle()}
                                                  className='btn btn-success w-50 d-block mx-auto my-2'>
                                                  <span className='px-2'>Sign In with Google Account</span>
                                        </button>
                              </div>
                    </div>
          );
};

export default SocialLogin;