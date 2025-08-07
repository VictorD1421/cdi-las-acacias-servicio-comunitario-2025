import { Facebook, Twitter, TikTok, Youtube, Instagram } from "@/components/Icons";


interface IconProps {
  className?: string;
}

interface SocialNetworkItem {
  icon: React.FC<IconProps>;
  title: string;
  url: string;
}

const socialNetwork: SocialNetworkItem[] = [
 
];

export default socialNetwork;
