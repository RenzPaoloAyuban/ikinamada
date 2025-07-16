import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import HeroSection from "@/components/HeroSection";
import ShortFilmSection from "@/components/ShortFilmSection";
import PeopleSection from "@/components/PeopleSection";
  
export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <HeroSection>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 drop-shadow-lg">
          Welcome to ikinamada
        </h1>
        <p className="text-lg text-white text-center drop-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        </HeroSection>
      <ShortFilmSection  />
      <PeopleSection />
    </div>
  );
}
