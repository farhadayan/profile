export interface LayoutConfigChild {
  title: string;
  link: string | null;
}

export interface LayoutConfig {
  icon: string;
  title: string;
  link: string | null;
  open: boolean;
}

export const LAYOUT_CONFIG: LayoutConfig[] = [
  {
    icon: '',
    title: 'Resume',
    open: false,
    link: 'resume',
  },
  {
    icon: '',
    title: 'Linkedin',
    open: false,
    link: 'linkedin',
  },
  {
    icon: '',
    title: 'Sample projects',
    open: false,
    link: 'projects',
  },
];
