import NavbarDemo from "@/components/ui/resizable-navbar-demo";
import HeroVid from "@/components/ui/herovid";

export default function Home() {
  return (
    <div className="bg-black-100">
      <NavbarDemo />
      <HeroVid>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 drop-shadow-lg">
          Welcome to ikinamada
        </h1>
        <p className="text-lg text-white text-center drop-shadow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </HeroVid>
      {/* ...rest of your content */}
    </div>
  );
}
