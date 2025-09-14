interface GenerateType {
  title: string;
  src: string;
  desc: string;
  newTag?: boolean;
}
interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  alt_description: string;
}
interface Navlink {
  icon: React.ReactNode;
  href: string;
}
