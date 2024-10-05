import PostTable from '@/components/posts/PostTable';
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';

const PostPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostPagination />
    </div>
  );
};

export default PostPage;
