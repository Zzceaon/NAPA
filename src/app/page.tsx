import Main from '@/components/Main';
import homeSrc from '/public/home.jpeg';

export default function Home() {
  return <Main imgUrl={homeSrc} altText="Home" content="Welcome to Pixiv" />;
}
