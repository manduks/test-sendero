import { Button } from '../components/Button';
// eslint-disable-next-line sort-imports
import Head from 'next/head';
import { Invoice } from 'components/Invoice/Invoice';
//import ToastAlert from 'components/Login/ToastAlert';
// eslint-disable-next-line sort-imports
import type { NextPage } from 'next';
import { ProgressBar } from 'components/Course/ProgressBar';
import TabsCourse from 'components/Course/TabCourse';
import ToastAlertCourse from 'components/Course/ToastAlertCourse';

const Home: NextPage = () => {
  return (
    <div className="mx-12 my-16">
      <Head>
        <title>Design System</title>
      </Head>
      <div className="flex">
        <div className="h-96 w-36 bg-lima" />
        <div className="h-96 w-36 bg-vainilla" />
        <div className="h-96 w-36 bg-azul-fuerte" />
        <div className="h-96 w-36 bg-azul-claro" />
        <div className="h-96 w-36 bg-negro" />
        <div className="h-96 w-36 bg-negro-claro" />
        <div className="h-96 w-36 bg-gris" />
        <div className="h-96 w-36 bg-slate-50" />
      </div>

      <h1 className="font-semibold text-3xl font-Inter tracking-widest">
        Airdrop
      </h1>
      <p className="font-Jura font-normal tracking-normal text-3xl mt-4">
        Learn Nextjs from the best
      </p>

      <h1 className="font-semibold text-3xl font-IBM-Plex-Mono tracking-widest mt-16">
        Sendero
      </h1>
      <p className="font-IBM-Plex-Sans font-light tracking-widest text-3xl mt-4">
        Almost before we kne it, we had left the ground.
      </p>
      <div className="border border-negro mt-5">
        <div className="w-full h-10 bg-slate-50" />
        <div className="w-full h-10 bg-slate-100" />
        <div className="w-full h-10 bg-slate-200" />
        <div className="w-full h-10 bg-slate-300" />
        <div className="w-full h-10 bg-slate-400" />
        <div className="w-full h-10 bg-slate-500" />
        <div className="w-full h-10 bg-slate-600" />
        <div className="w-full h-10 bg-slate-700" />
        <div className="w-full h-10 bg-slate-800" />
        <div className="w-full h-10 bg-slate-900" />
      </div>
      <div className="w-full my-3 flex space-x-10">
        <div className="w-1/3">
          <Button variant="white">Ingresar</Button>
        </div>
        <div className="w-1/3">
          <Button variant="dark">Comprar curso</Button>
        </div>
        <div className="w-1/3">
          <Button variant="blue">Comprar curso</Button>
        </div>
      </div>
      <div className="flex items-center p-10 bg-negro-claro">
        <ProgressBar percent={73} />
      </div>
      <div className="mt-20 flex justify-center">
        <Invoice
          identifier="123456789"
          date="14 de septiembre del 2022"
          street="Hebrea 20"
          delegation="Tlahuac, 13230 CDMX"
          country="México"
          price="140.00"
        />
      </div>
      <div className="flex justify-center mt-10">
        <TabsCourse />
      </div>

      {/* <ToastAlert variant="alert" message="Este es un mensaje de error" /> */}
      <ToastAlertCourse variant="alert" message="Mensaje de alerta" />
    </div>
  );
};

export default Home;
