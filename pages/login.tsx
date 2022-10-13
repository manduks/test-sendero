/* eslint-disable sort-imports */
import { Button } from 'components/Button';
import Head from 'next/head';
import type { NextPage } from 'next';
import ToastAlert from 'components/Login/ToastAlert';
import { useLogin } from 'hooks/useLogin';
import { useState } from 'react';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const { handleLogin, sessionStatus } = useLogin();

  return (
    <div className="mx-6">
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className="flex pt-32 h-screen w-full justify-center items-center">
        <div className="w-[593px] flex flex-col">
          <p className="font-IBM-Plex-Sans font-semibold text-lg tracking-widest">
            Ingresa tu email
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-4 border placeholder:font-IBM-Plex-Sans placeholder:font-semibold placeholder:text-lg placeholder:tracking-widest placeholder:text-[#DBDBDE]"
            placeholder="Email con el que compraste el curso "
          />
          <div className="w-full flex justify-end">
            <div className="w-1/2 mt-6">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email);
                }}
                variant="dark"
              >
                Ingresar
              </Button>
            </div>
          </div>
        </div>
      </form>
      {sessionStatus == false && (
        <ToastAlert variant="alert" message="Compra un curso primero" />
      )}
      {sessionStatus == true && (
        <ToastAlert
          variant="success"
          message="Revisa el link que te enviamos a tu correo"
        />
      )}
    </div>
  );
};

export default Login;