import DashboardCard from '@/components/dashboard/DashboardCard';
import { Newspaper } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row" justify-between gap-5 mb-5>
        <DashboardCard
          title="Posts"
          icon={<Newspaper className="text-slate-500" size={72} />}
          count={100}
        />
      </div>
    </div>
  );
}
