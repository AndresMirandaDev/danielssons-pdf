import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';


import AppFormField from "../../components/forms/AppFormField";
import AppForm from "../../components/forms/AppForm";
import colors from "../../config/colors";
import SubmitButton from "../../components/forms/SubmitButton";
import useAuth from "../../auth/useAuth";
import authApi from '../../api/auth'
import ErrorMessage from '../../components/ErrorMessage';
import { useState } from 'react';
import Spinner from '../../components/Spinner';

const Login = () => {
  const auth =  useAuth()
  const [loginFailed, setLoginFailed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async ({email, password}) =>{
   setLoading(true)
   const result =  await authApi.login(email, password)
   if(!result.ok) {
    setLoading(false) 
    
    return setLoginFailed(true)
   }

   auth.logIn(result.data['este es el token']) 
   setLoading(false)
  }
  
  return (
    <div className='h-screen lg (1024px) display: flex' >
      <div className="lg w-2/5  bg-cover bg-stockholm justify-center items-start flex p-20" >
        <div className="lg w-64 h-64 bg-logo bg-contain bg-no-repeat"></div>
      </div>
      <div className="w-3/5 bg-gradient-to-br from-primaryOpacity to-primary justify-center items-center flex">
       <div className="w-3/5 p-10">
        <h2 className="text-white text-3xl my-10">Välkommen</h2>
        <AppForm 
        initialValues={{
          email:'',
          password:''
        }}
        onSubmit={handleSubmit}
        >
          <div className="grid gap-6 mb-6 w-full" >
          <AppFormField name='email' icon={<FaUser color={colors.light}/>} label='Användarnamn'/>
          <AppFormField name='password' icon={<FaLock color={colors.light}/>} label='Lösenord' type='password'/>
          <ErrorMessage error='Fel användarnamn och/eller lösenord' visible={loginFailed}/>

          {loading? <div className='justify-center items-center flex'><Spinner /></div> :<SubmitButton title='Log in' type='submit' color='yellow' textColor='primary'/>}
          </div>
        </AppForm>
          </div>
      </div>
    </div>
  );
};

export default Login;
