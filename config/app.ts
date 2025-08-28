import {
  BikeIcon,
  Briefcase,
  BusIcon,
  CarIcon,
  ChartNoAxesColumnDecreasingIcon,
  Clapperboard,
  ClapperboardIcon,
  CoinsIcon,
  Cpu,
  FileTextIcon,
  FlaskConical,
  Globe2,
  GlobeIcon,
  GraduationCap,
  HeartPulse,
  HouseIcon,
  ImageIcon,
  Landmark,
  Leaf,
  List,
  ListMusicIcon,
  Mailbox,
  MegaphoneIcon,
  MessageCircleQuestion,
  MountainIcon,
  NotebookPenIcon,
  Palette,
  Plane,
  PlaneIcon,
  ShieldAlert,
  Smile,
  Trophy,
  TruckIcon,
  UsersIcon,
} from "lucide-react";
import { FaEarthAfrica, FaEarthAmericas, FaEarthEurope } from "react-icons/fa6";
import type {
  Tcar,
  TFooterLink,
  TNavItem,
  TNewsCategory,
  TNewsLink,
  Tservices,
} from "@/types";

export const topTextMessages = [
  {
    text: "Hari amasiganwa ya magare ari kubera Kimironko ku mwaka wa 2025",
    link: "https://hextaui.com",
    tooltipText: "🚴‍♀️ Info Tv 🚲",
  },
  {
    text: "Irushanwa ry'ikoranabuhanga rigiye kubera i Kigali mu kwezi kwa Nyakanga",
    link: "https://techchallenge.rw",
    tooltipText: "💻 Tech Challenge 🌐",
  },
  {
    text: "Igitaramo cy'abahanzi kizabera BK Arena tariki 20 Kamena",
    link: "https://bkarenalive.rw",
    tooltipText: "🎤 BK Arena 🎶",
  },
];
export const navItems: TNavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: HouseIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: NotebookPenIcon,
  },
  {
    href: "/staff",
    label: "Staffs",
    icon: UsersIcon,
  },
  {
    href: "/book",
    label: "Book",
    icon: ImageIcon,
  },
  {
    href: "/tv",
    label: "TV",
    icon: ClapperboardIcon,
  },
  {
    href: "/podcast",
    label: "Podcast",
    icon: ListMusicIcon,
  },
  {
    href: "/ads",
    label: "Ads",
    icon: MegaphoneIcon,
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: CoinsIcon,
  },
];
export const newsLinks: TNewsLink[] = [
  {
    title: "News",
    links: [
      {
        title: "Breaking News",
        href: "/",
        icon: Mailbox,
        external: false,
      },
      {
        title: "Latest News",
        href: "/",
        icon: FileTextIcon,
        external: false,
      },
      {
        title: "Top Stories",
        href: "/",
        icon: ChartNoAxesColumnDecreasingIcon,
        external: false,
      },
      {
        title: "Local News",
        href: "/",
        icon: GlobeIcon,
        external: false,
      },
    ],
  },
  {
    title: "Region",
    links: [
      {
        title: "Rwanda",
        href: "/",
        external: false,
        icon: MountainIcon,
      },
      {
        title: "Africa",
        href: "/",
        external: false,
        icon: FaEarthAfrica,
      },
      {
        title: "Usa",
        href: "/",
        external: false,
        icon: FaEarthAmericas,
      },
      {
        title: "Europe",
        href: "/",
        external: false,
        icon: FaEarthEurope,
      },
    ],
  },
];
export const footerLinks: TFooterLink[] = [
  {
    title: "Newsroom",
    links: [
      { name: "Latest News", href: "/", external: false },
      { name: "Top Stories", href: "/", external: false },
      { name: "Editor's Picks", href: "/", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/", external: false },
      { name: "Careers", href: "/", external: false },
      { name: "Press", href: "/", external: false },
      { name: "Contact", href: "/", external: false },
    ],
  },
  {
    title: "For Business",
    links: [
      { name: "Advertise with Us", href: "/", external: false },
      { name: "Media Kit", href: "/", external: false },
      { name: "Partner with Us", href: "/", external: false },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Newsletter", href: "/", external: false },
      { name: "Mobile App", href: "/", external: false },
      { name: "RSS Feeds", href: "/", external: false },
      { name: "Help Center", href: "/", external: false },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { name: "Terms of Use", href: "/", external: false },
      { name: "Privacy Policy", href: "/", external: false },
      { name: "Cookie Policy", href: "/", external: false },
      { name: "Editorial Policy", href: "/", external: false },
    ],
  },
  {
    title: "Safety",
    links: [
      { name: "Fact-Checking", href: "/", external: false },
      { name: "Corrections", href: "/", external: false },
      { name: "Trust & Transparency", href: "/", external: false },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "/", external: true },
      { name: "Twitter", href: "/", external: true },
      { name: "Instagram", href: "/", external: true },
      { name: "YouTube", href: "/", external: true },
    ],
  },
  {
    title: "Sections",
    links: [
      { name: "Politics", href: "/", external: false },
      { name: "Business", href: "/", external: false },
      { name: "Technology", href: "/", external: false },
      { name: "Health", href: "/", external: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Media Resources", href: "/", external: false },
      { name: "Author Guidelines", href: "/", external: false },
      { name: "News Archive", href: "/", external: false },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Events", href: "/", external: false },
      { name: "Reader Stories", href: "/", external: false },
      { name: "Submit News", href: "/", external: false },
    ],
  },
];

export const newsCategories: TNewsCategory[] = [
  { name: "All", link: "/", icon: List },
  { name: "Politics", link: "/", icon: Landmark },
  { name: "Business", link: "/", icon: Briefcase },
  { name: "Technology", link: "/", icon: Cpu },
  { name: "Sports", link: "/", icon: Trophy },
  { name: "Entertainment", link: "/", icon: Clapperboard },
  { name: "Health", link: "/", icon: HeartPulse },
  { name: "Science", link: "/", icon: FlaskConical },
  { name: "World", link: "/", icon: Globe2 },
  { name: "Education", link: "/", icon: GraduationCap },
  { name: "Environment", link: "/", icon: Leaf },
  { name: "Lifestyle", link: "/", icon: Smile },
  { name: "Travel", link: "/", icon: Plane },
  { name: "Crime", link: "/", icon: ShieldAlert },
  { name: "Opinion", link: "/", icon: MessageCircleQuestion },
  { name: "Culture", link: "/", icon: Palette },
];

export const services: Tservices[] = [
  {
    label: "All Cars",
    link: "/all",
    icon: CarIcon,
  },
  {
    label: "Sedans",
    link: "/sedans",
    icon: CarIcon,
  },
  {
    label: "SUVs",
    link: "/suvs",
    icon: TruckIcon,
  },
  {
    label: "Luxury Cars",
    link: "/luxury",
    icon: CarIcon,
  },
  {
    label: "Sports Cars",
    link: "/sports",
    icon: CarIcon,
  },
  {
    label: "Pickup Trucks",
    link: "/pickups",
    icon: TruckIcon,
  },
  {
    label: "Vans & Minibuses",
    link: "/vans",
    icon: BusIcon,
  },
  {
    label: "Motorbikes",
    link: "/motorbikes",
    icon: BikeIcon,
  },
  {
    label: "Airport Transfers",
    link: "/airport-transfers",
    icon: PlaneIcon,
  },
  {
    label: "Chauffeur Services",
    link: "/chauffeur",
    icon: CarIcon,
  },
];

export const carsList: Tcar[] = [
  {
    title: "Land Cruiser",
    slug: "land-cruiser",
    imageWhite: "/a.png",
    imageBlack: "/car-black.jpg",
    category: "SUV",
    price: {
      inRwf: "80,000",
      inUsd: "80",
    },
  },
  {
    title: "Land Cruiser",
    slug: "land-cruisera",
    imageWhite: "/b.jpg",
    imageBlack: "/car-black.jpg",
    category: "SUV",
    price: {
      inRwf: "80,000",
      inUsd: "80",
    },
  },
  {
    title: "Land Cruiser",
    slug: "land-cruiserb",
    imageWhite: "/c.jpg",
    imageBlack: "/car-black.jpg",
    category: "SUV",
    price: {
      inRwf: "80,000",
      inUsd: "80",
    },
  },
  {
    title: "Land Cruiser",
    slug: "land-cruiserc",
    imageWhite: "/d.jpg",
    imageBlack: "/car-black.jpg",
    category: "SUV",
    price: {
      inRwf: "80,000",
      inUsd: "80",
    },
  },
];
