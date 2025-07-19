import { AnimatedTestimonials } from "./animated-testimonials";
import ayuban from '../../../public/img/ayuban.jpg';
import alano from '../../../public/img/alano.jpg';


export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Renz Paolo Ayuban",
      designation: "Developer at Ikinamada",
      src: ayuban,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Han Zander Villanueva",
      designation: "CEO at Ikinamada",
      src: ayuban,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Lorainne Diaz",
      designation: "Operations Director at Ikinamada",
      src: ayuban,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Juan Karlo Alano",
      designation: "Cybersecurity Analyst at Ikinamada",
      src: alano,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Krishia Aleiah Mojica",
      designation: "Marketing Manager at Ikinamada",
      src: ayuban,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Krystine Kaye Nequiota",
      designation: "UI/UX Designer at Ikinamada",
      src: ayuban,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Leus Deirich Gatmaitan",
      designation: "Tambay at Ikinamada",
      src: ayuban,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
} 