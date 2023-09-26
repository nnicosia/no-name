import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/utils/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (<div>Signed In</div>)
  } else {
    return (<div>Signed out</div>)
  }
}
