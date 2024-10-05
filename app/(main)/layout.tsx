import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-full">
        <div className="hidden md:block w-[300px] h-[100vh]">
          <Sidebar />
        </div>
        <div className="p-5 w-full md:mx-w-[1140px] h-[100vh]">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
