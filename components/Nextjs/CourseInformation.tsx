export const CourseInformation = () => {
  return (
    <div className="w-screen -ml-11 h-[845px] px-32 bg-customGradient">
      <div className="flex pt-32 justify-center space-x-36">
        <div className="w-[367px]">
          <h1 className="font-IBM-Plex-Mono text-vainilla font-semibold tracking-wider text-2xl mb-14">
            Desde principiantes con conocimientos básicos de Javascript.
          </h1>
          <p className="font-IBM-Plex-Sans font-semibold text-base tracking-wider text-gris">
            Shift Nudge is the systematic process to learn the visual skills of
            interface design, even if you dont have a design background. Perfect
            for those wanting to enter or advance in the field
          </p>
        </div>

        <div className="w-[677px] mb-24">
          <h1 className="font-IBM-Plex-Mono text-vainilla font-semibold tracking-wider text-2xl mb-5">
            Hasta desarrolladores experimentados que quieren aprender este
            increible framework y crear aplicaciones robustas en la mitad de
            tiempo.
          </h1>
          <p className="font-IBM-Plex-Sans font-semibold text-base tracking-wider text-gris">
            Shift Nudge is the systematic process to learn the visual skills of
            interface design, even if you dont have a design background. Perfect
            for those wanting to enter or advance in the field. Shift Nudge is
            the systematic process to learn the visual skills of interface
            design, even if you dont have a design background. Perfect for those
            wanting to enter or advance in the field.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[#EAEAEA] font-IBM-Plex-Sans font-bold text-[120px] leading-none tracking-wider">
            88
          </h1>
          <p className="text-[#F1F1F1] font-IBM-Plex-Sans font-bold text-xl leading-none tracking-wider">
            Lecciones
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-[#EAEAEA] font-IBM-Plex-Sans font-bold text-[120px] leading-none tracking-wider">
              20
            </h1>
            <span className="text-azul-claro font-bold font-IBM-Plex-Sans text-3xl tracking-wider">
              +
            </span>
          </div>
          <p className="text-[#F1F1F1] font-IBM-Plex-Sans font-bold text-xl leading-none tracking-wider">
            Horas de contenido
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-[#EAEAEA] font-IBM-Plex-Sans font-bold text-[120px] leading-none tracking-wider">
              30
            </h1>
            <span className="text-azul-claro font-bold font-IBM-Plex-Sans text-3xl tracking-wider">
              +
            </span>
          </div>
          <p className="text-[#F1F1F1] font-IBM-Plex-Sans font-bold text-xl leading-none tracking-wider">
            Videos
          </p>
        </div>
      </div>
    </div>
  );
};
