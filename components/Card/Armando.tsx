import React from 'react';

export default function Armando() {
  return (
    <div className="border-b border-azul-claro p-4 flex flex-col space-y-2">
      <h1 className="!mb-0 !text-[44px]">tRPC - APIs rápidas con Typescript</h1>
      <h2 className="!mb-0 !font-IBM-Plex-Sans !text-[32px] flex flex-col">
        <span className="text-slate-50">Armando Gonzalez</span>
        <a
          className="!text-azul-claro !text-2xl pt-2 hover:!text-azul-fuerte"
          href="https://twitter.com/manduks"
        >
          @manduks
        </a>
      </h2>

      <h3 className="!text-xl !font-IBM-Plex-Sans flex flex-col">
        Software Engineer{' '}
        <a
          className="!text-xl !font-IBM-Plex-Sans pt-2"
          href="https://twitter.com/immunefi"
        >
          @immunefi
        </a>
      </h3>
    </div>
  );
}
