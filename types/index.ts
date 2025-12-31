export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon?: React.ComponentType;
}
