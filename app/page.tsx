import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostTable from '@/components/posts/PostTable';
import AnalyticsCharts from '@/components/dashboard/AnalyticsCharts';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          icon={<Newspaper className="text-slate-500" size={72} />}
          count={100}
        />
        <DashboardCard
          title="Categories"
          icon={<Folder className="text-slate-500" size={72} />}
          count={12}
        />
        <DashboardCard
          title="Users"
          icon={<User className="text-slate-500" size={72} />}
          count={750}
        />
        <DashboardCard
          title="Comments"
          icon={<MessageCircle className="text-slate-500" size={72} />}
          count={1200}
        />
      </div>
      <AnalyticsCharts />
      <PostTable title="Latest Posts" limit={5} />
    </div>
  );
}
