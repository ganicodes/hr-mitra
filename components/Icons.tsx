import {
  BringToFront,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  Loader2,
  ShieldCheck,
  UserRoundCog,
  UserRoundPlus,
  X,
} from "lucide-react";

export type LucideIcon = String;

export const Icons = {
  logo: BringToFront,
  dashboard: LayoutDashboard,
  recruitment: UserRoundPlus,
  profile: UserRoundCog,
  trainings: GraduationCap,
  admin: ShieldCheck,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
};
