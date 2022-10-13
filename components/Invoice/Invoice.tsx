type InvoiceProps = {
  identifier: string;
  date: string;
  street: string;
  delegation: string;
  country: string;
  price: string | number;
};

export const Invoice = (props: InvoiceProps) => {
  const { identifier, date, street, delegation, country, price } = props;

  return (
    <div className="w-[600px] h-[600px] border">
      <div className="flex bg-negro-claro  w-full h-1/2 pr-8 pt-7 pl-12 justify-between">
        <div className="flex flex-col space-y-9 mt-10">
          <div>
            <h2 className="font-Inter font-bold text-lg tracking-widest text-slate-50">
              Identificador
            </h2>
            <p className="font-Inter font-normal text-base tracking-widest text-[#DBDBDE]">
              {identifier}
            </p>
          </div>

          <div>
            <h2 className="font-Inter font-bold text-lg tracking-widest text-slate-50">
              Fecha
            </h2>
            <p className="font-Inter font-normal text-base tracking-widest text-[#DBDBDE]">
              {date}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-slate-50 h-min font-IBM-Plex-Mono font-bold text-2xl tracking-widest">
            Factura
          </h1>
        </div>
      </div>
      <div className="h-1/2 pr-8 pt-20 pl-12">
        <div>
          <h1 className="font-IBM-Plex-Mono font-bold text-base tracking-widest mb-2">
            Sendero LLC
          </h1>
          <p className="font-IBM-Plex-Mono font-bold text-base tracking-widest text-[#CCCCCC]">
            {street}
          </p>
          <p className="font-IBM-Plex-Mono font-bold text-base tracking-widest text-[#CCCCCC]">
            {delegation}
          </p>
          <p className="font-IBM-Plex-Mono font-bold text-base tracking-widest text-[#CCCCCC]">
            {country}
          </p>
        </div>
        <h1 className="font-IBM-Plex-Mono text-end mt-16 font-medium text-base tracking-widest">
          Total: ${price} USD
        </h1>
      </div>
    </div>
  );
};
