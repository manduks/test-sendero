type AnnouncementProps = {
  message: string;
  link: string;
  isSticky?: boolean;
};

export const Announcement = (props: AnnouncementProps) => {
  const { message, link, isSticky } = props;

  return (
    <div
      className={`flex w-full h-16 bg-vainilla items-center justify-center ${
        isSticky ? 'sticky' : null
      }`}
    >
      <p className="font-IBM-Plex-Sans tracking-widest font-normal text-xl cursor-pointer">
        {message}{' '}
        <a className="font-bold underline">
          {link} {'>>'}
        </a>
      </p>
    </div>
  );
};
