import Image from 'next/image';

export const BussinesImages = () => {
  return (
    <div className="flex w-full justify-between">
      {[...Array(5)].map((e, i) => (
        <Image
          key={i}
          src={require(`../../public/landing/Company${i + 1}.svg`)}
          width={105}
          height={100}
          alt={`Company ${i + 1}`}
        />
      ))}
    </div>
  );
};
