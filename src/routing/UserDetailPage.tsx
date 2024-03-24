import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation()
  // console.log(searchParams.get('name'))

  return <p>User {id}</p>;
};

export default UserDetailPage;
