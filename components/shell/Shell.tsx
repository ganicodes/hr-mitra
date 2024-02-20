import Header from "./Header";
import SideNav from "./SideNav";

interface ShellProps {
  children: React.ReactNode;
}
const Shell = ({ children }: ShellProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <div className="flex gap-2 min-h-screen">
        <SideNav />
        {children}
      </div>
    </div>
  );
};

export default Shell;
