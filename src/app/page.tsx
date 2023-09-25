import { getServerSession } from 'next-auth';
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (<div>Signed In</div>)
  } else {
    return (<div>Signed out</div>)
  }
}
