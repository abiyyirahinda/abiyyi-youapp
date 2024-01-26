// Home.jsx

import Navigation from "@/components/navigation";

export const revalidate = 0;
const Home = async () => {
  return (
    <div className="max-w-xl mx-auto">
      <Navigation />
    </div>
  );
};

export default Home;
