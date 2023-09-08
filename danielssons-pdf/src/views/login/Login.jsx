import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import AppTextInput from "../../components/forms/AppTextInput";
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import colors from "../../config/colors";
import AppButton from "../../components/AppButton";
import SubmitButton from "../../components/forms/SubmitButton";


const Login = () => {
  
  return (
    <div className='h-screen lg (1024px) display: flex' >
      <div className="lg w-2/5  bg-cover bg-stockholm justify-center items-start flex p-20" >
        <div className="lg w-64 h-64 bg-logo bg-contain bg-no-repeat"></div>
      </div>
      <div className="w-3/5 bg-gradient-to-br from-primaryOpacity to-primary justify-center items-center flex">
        <AppForm 
        initialValues={{
          username:'',
          password:''
        }}
        onSubmit={()=>{console.log('login pressed')}}
        >
          <div className="grid gap-6 mb-6 w-full justify-center items-center">
          <AppFormField name='username' icon={<FaUser color={colors.light}/>} label='Username'/>
          <AppFormField name='password' icon={<FaLock color={colors.light}/>} label='Password'/>
          <SubmitButton title='Log in' type='submit'/>
          </div>
        </AppForm>
      </div>
    </div>
  );
};

export default Login;
