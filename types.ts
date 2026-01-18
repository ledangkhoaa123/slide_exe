import { LucideIcon } from 'lucide-react';

export interface SlideProps {
  isActive?: boolean;
}

export interface CoreValueProps extends SlideProps {
  id: number;
  label: string;
  headline: string;
  subHeadline: string;
  challenge: string;
  solution: string;
  keyPhrase: string;
  Icon: LucideIcon;
  colorTheme?: string;
}
