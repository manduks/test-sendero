import { Experts } from './Data/Experts';
import { ExpertsSection } from './ExpertsSection';

export const AboutUs = () => {
  return (
    <div className="w-screen pt-5 -ml-11 bg-negro-claro px-28">
      <h1 className="font-IBM-Plex-Sans text-slate-50 font-bold text-[80px] tracking-[0.01rem] mt-28">
        Somos Ingenieros de software
      </h1>
      <div className="flex mt-14 space-x-16 mb-44">
        <h2 className="font-IBM-Plex-Sans text-slate-50 font-semibold text-3xl leading-10 w-1/2">
          Con más de 10 años de experiencia hemos ayudado a empresas a crear,
          mejorar y lanzar proyectos web a millones de usuarios.
        </h2>
        <p className="font-IBM-Plex-Sans text-slate-50 w-1/3 text-base leading-5">
          Responsables de liderar, capacitar y seleccionar equipos completos de
          ingenieros para diferentes empresas, aprendimos cuales son los skills
          y technologias mas importartes en la creacion de aplicaciones a gran
          escala. <br />
          <br />
          Empresas como Immunefi, Thrive Market, Distillery, Moduscreate, Softek
          han solicitado nuestros sevicios.
        </p>
      </div>
      <ExpertsSection experts={Experts} />
    </div>
  );
};
