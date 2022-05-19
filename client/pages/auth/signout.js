import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';

export default () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  });

  useEffect(async () => {
    await doRequest();
  }, []);

  return <div> Signing you out.....</div>;
};
