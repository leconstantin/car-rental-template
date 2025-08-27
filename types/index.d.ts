import type { LucideIcon } from "lucide-react";

export type TFooterLink = {
  title: string;
  links: { name: string; href: string; external: boolean }[];
};
export type TNavItem = {
  href: string;
  label: string;
  external?: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
export type TImageCard = {
  title: string;
  images: {
    imageUrl: string;
    title: string;
    description: string;
    date: string; // ISO string format
  }[];
};

export type TVideo = {
  title: string;
  slug: string;
  description: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  date: string; // ISO string format
  views: number;
};

export type VideoPlayerProps = {
  src: string | string[];
  poster?: string;
  className?: string;
  buttonClassName?: string;
  aspectRatio?: "16/9" | "9/16" | "4/3" | "1/1" | "auto";
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  showCenterPlayButton?: boolean;
  showHoverControls?: boolean;
  autoPlayOnHover?: boolean;
  pauseOnHoverLeave?: boolean;
  buttonPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onHoverPlay?: () => void;
  onHoverPause?: () => void;
  width?: string | number;
  height?: string | number;
};
export type Article = {
  title: string;
  slug: string;
  description: string;
  cover_media: string;
  cover_type: "Image" | "Video";
  author: {
    name: string;
    image?: string;
  };
  link: string;
  date: string;
  category: string;
  views: number;
};

export type TNewsLink = {
  title: string;
  links: {
    title: string;
    href: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    external: boolean;
  }[];
};
export type TNewsCategory = {
  name: string;
  link: string;
  icon: LucideIcon;
};

export type Ad = {
  companyName: string;
  cover: string;
  coverType: "img" | "vid";
  createdAt: string;
  link?: string;
  isActive?: boolean;
};

export type Album = {
  name: string;
  artist: string;
  cover: string;
};

export type TArticle = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  cover_media: string | null;
  words: number;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string;
    image: string | null;
  };
  category: {
    id: string;
    title: string;
  } | null;
};
export type TNewsCategori = {
  id: string;
  title: string;
};

export type TStaff = {
  name: string;
  id: string;
  bio: string | null;
  urls: string[];
  role: "ADMIN" | "JOURNALIST" | "MEDIA_MANAGER" | "ADS_MANAGER";
  email: string;
  image: string | null;
  createdAt: Date;
  media: {
    id: string;
    title: string;
    url: string;
  }[];
  articles: {
    id: string;
    title: string;
    slug: string;
  }[];
};
