type FeaturesSectionProps = {
  nameSection: string;
  data: {
    title: string;
    contain: string;
    description: string;
  }[];
};

export const FeaturesSection = (props: FeaturesSectionProps) => {
  const { nameSection, data } = props;

  return (
    <div className="mt-24 mx-20">
      <h1 className="font-IBM-Plex-Sans font-bold text-[56px] text-center mb-20 tracking-[0.15rem]">
        {nameSection}
      </h1>
      <div className="grid grid-cols-3">
        {data.map((el, i) => (
          <div className="max-w-sm mb-20" key={i}>
            <h1 className="font-IBM-Plex-Mono font-bold text-[40px] tracking-wide">
              {el.title}
            </h1>
            <p className="font-IBM-Plex-Sans text-azul-fuerte font-semibold text-xl tracking-wide -mt-2">
              {el.contain}
            </p>
            <p className="font-IBM-Plex-Sans font-semibold text-xl leading-6 tracking-wide mt-4">
              {el.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
