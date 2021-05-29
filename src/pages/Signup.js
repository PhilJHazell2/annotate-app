import React from 'react';
import Header from '../components/Header.js';
import { useForm } from 'react-hook-form';
import {signup} from '../firebase/auth';
import { useState } from 'react';

function Signup(props) {
    const { register, handleSubmit, reset } = useForm();
    const[isLoading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        let newUser;
        setLoading(true);
        try{
            newUser = await signup(data);
            reset();
        } catch(error) {
            console.log(error)
        }

        if(newUser){
            props.history.push('/');
        } else {
        setLoading(false);
        }
    }

    const formClassName = `mx-auto ${ isLoading ? 'hidden' : ''}`;
    return (
        <>
            <Header />
            <div className="bg-gray-50 w-screen mx-auto pt-12 h-screen">
                <div className="w-screen flex justify-center flex-row mx-auto ">
                    <div className="w-4/12">
                        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 gap-6 mx-auto">
                                <label className="block mx-auto w-full">
                                    <input type="email" name="email" className="mt-0 bg-gray-50 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="example@example.com" {...register('email')}/>
                                </label>
                                <label className="block mx-auto mb-8 w-full">
                                    <input type="password" name="password" className="mt-0 bg-gray-50 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Password..." {...register('password')}/>
                                </label>
                            </div>
                            <input type="submit" value="Sign Up" className="px-8 py-2 bg-green-500 rounded-sm mb-8 text-white shadow-sm hover:bg-green-400 transition-all duration-300 hover:shadow-none"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Signup;
  