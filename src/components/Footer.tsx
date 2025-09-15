import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-6 flex justify-between items-center bg-primary text-muted">
      <div className="text-3xl flex items-center gap-5">
        <div className="w-15 h-15 bg-muted-foreground rounded-lg flex items-center justify-center">
          <Image src="/icons/kreaLogo.svg" alt="logo" width={50} height={50} />
        </div>
        <span className="font-semibold">Krea AI</span>
      </div>
      <h2>
        curated by<span className="text-4xl font-extrabold"> Mobbin</span>
      </h2>
    </footer>
  );
};

export default Footer;
