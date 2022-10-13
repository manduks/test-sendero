import Image from 'next/image';

type ExpertsSectionProps = {
  experts: {
    name: string;
    company: string;
    description: string;
  }[];
};

export const ExpertsSection = (props: ExpertsSectionProps) => {
  const { experts } = props;

  return (
    <div className="grid grid-cols-3">
      {experts.map((expert, i) => (
        <div className="w-80 mb-36" key={i}>
          <p className="text-slate-50 font-IBM-Plex-Sans font-medium text-xl leading-6">
            {expert.description}
          </p>
          <div className="flex space-x-12 mt-5">
            <Image
              src={'/landing/engineer.png'}
              alt="Imágen Ingeniero"
              width={55}
              height={63}
            />
            <div>
              <h1 className="text-slate-50 uppercase font-IBM-Plex-Sans font-bold text-base">
                {expert.name}
              </h1>
              <h2 className="text-azul-fuerte uppercase font-IBM-Plex-Sans font-bold">
                {expert.company}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
