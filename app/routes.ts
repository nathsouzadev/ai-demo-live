import {
  Code,
  LucideIcon,
  MessageSquare,
} from 'lucide-react';

interface ITools {
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
  description: string;
}

interface IRoutes {
  label: string;
  icon: LucideIcon;
  href: string;
  color?: string;
  bgColor?: string;
}

export const conversationDetails: ITools = {
  label: 'Conversation',
  icon: MessageSquare,
  href: '/conversation',
  color: 'text-violet-500',
  bgColor: 'bg-violet-500/10',
  description: 'Our conversation model',
}

export const codeDetails: ITools = {
  label: 'Code generator',
  icon: Code,
  href: '/code',
  color: 'text-green-700',
  bgColor: 'bg-green-700/10',
  description: 'Generate code using descriptive text',
}

export const tools: IRoutes[] = [
  { ...conversationDetails },
  { ...codeDetails },
];

export const routes: IRoutes[] = [
  ...tools
];
