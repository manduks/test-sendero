type CapacitationCardProps = {
  technology: string;
  hours: string;
  minimumPeople: string;
  maximumPeople: string;
  price: string;
};

export const CapacitationCard = (props: CapacitationCardProps) => {
  const { hours, minimumPeople, maximumPeople, price } = props;
  return (
    <div className="w-[626px] h-[511px] flex flex-col border border-solid border-lima rounded-lg bg-negro-claro shadow-customBoxShadow">
      <h1 className="font-IBM-Plex-Mono font-semibold text-5xl tracking-widest text-slate-50 text-center mt-16">
        Nextjs
      </h1>
      <div className="ml-12 space-y-3 mt-14 mb-20">
        <p className="font-semibold font-IBM-Plex-Sans text-xl tracking-widest text-slate-50">
          {hours}
        </p>
        <p className="font-semibold font-IBM-Plex-Sans text-xl tracking-widest text-slate-50">
          {minimumPeople}
        </p>
        <p className="font-semibold font-IBM-Plex-Sans text-xl tracking-widest text-slate-50">
          {maximumPeople}
        </p>
        <p className="font-semibold font-IBM-Plex-Sans text-xl tracking-widest text-slate-50">
          {price}
        </p>
      </div>
      <a className="text-lima text-end font-IBM-Plex-Mono font-semibold text-2xl tracking-widest mr-5">
        Preguntar {'>>'}
      </a>
    </div>
  );
};
