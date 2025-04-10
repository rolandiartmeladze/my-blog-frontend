 const PublicNavItems = [
  { name: 'About', link: '/about' },
  { name: 'News', link: '/news' },
  { name: 'Posts', link: '/posts' },
  { name: 'Contact', link: '/contact' },
];

type IconNames = "home" | "notifi" | "search" | "plus" | "avatar" | "menu";
const PrivateNavItems: { name: string; link: string; icon: IconNames }[] = [
  { name: 'Dashboard', link: '/dashboard', icon: 'home'},
  { name: 'Notifi', link: '/notification', icon: 'notifi'},  
  { name: 'Add Post', link: '/add-post', icon: 'plus'},
  { name: 'Search', link: '/search', icon: 'search'},
  { name: 'profile', link: '/profile', icon: 'avatar'},
];

export { PublicNavItems, PrivateNavItems };