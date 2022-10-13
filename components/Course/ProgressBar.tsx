type ProgressBarProps = {
  percent: string | number;
};

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <div className="h-5 w-full border bg-negro-claro flex items-center border-azul-fuerte">
      <span
        style={{ width: `${props.percent}%` }}
        className="font-IBM-Plex-Mono font-bold text-center text-xl leading-none tracking-widest bg-azul-fuerte text-[#FFFFFF]"
      >
        {props.percent}%
      </span>
    </div>
  );
};
