import HomePageView from "@/views/HomePageView";
import { getFights } from '@/services/fightService';

export default async function Home() {
  let fights : any = [];

  try {
    // Fetch fights from the service
    fights = await getFights();
  } catch (error) {
    console.error('Error fetching fights:', error);
  }
// console.log(fights)
  return (
    <HomePageView
    fights={fights}
    />
  );
}
