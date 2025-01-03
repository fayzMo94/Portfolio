import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Samba Diop",
    // position: "Marketing Manager @ TechStartups",
    text: "Fayz a joué un rôle essentiel dans la transformation de notre site web en un puissant outil de marketing. Son souci du détail et sa capacité à comprendre notre marque sont exceptionnels. Nous sommes ravis des résultats !",
    avatar: memojiAvatar1,
  },
  {
    name: "Nadine Lemoine",
    // position: "Head of Design @ GreenLeaf",
    text: "Travailler avec lui a été un réel plaisir. Son expertise en développement frontend a donné vie à nos designs d'une manière que nous n'aurions jamais imaginée. Le site web a dépassé toutes nos attentes.",
    avatar: memojiAvatar2,
  },
  {
    name: "Thibault Lefèvre",
    // position: "CEO @ InnovateCo",
    text: "La capacité de Fayz à créer des expériences utilisateur fluides est inégalée. Depuis le lancement du nouveau design, notre site web a connu une augmentation significative des conversions. Nous ne pourrions pas être plus satisfaits.",
    avatar: memojiAvatar3,
  },
  {
    name: "Clémence Dubois",
    // position: "Product Manager @ GlobalTech",
    text: "Il a pris notre produit complexe et l'a transformé en une interface utilisateur intuitive et attrayante. Nous recevons déjà des retours positifs de la part de nos clients.",
    avatar: memojiAvatar4,
  },
  {
    name: "Zohra Cherif",
    // position: "Director of IT @ MegaCorp",
    text: "Le travail de Fayz sur notre site web a été tout simplement exceptionnel. C'est un développeur talentueux et un excellent communicant. Nous le recommandons vivement.",
    avatar: memojiAvatar5,
  },
];

// Positions:
// Marketing Manager @ TechStartups
// Head of Design @ GreenLeaf
// CEO @ InnovateCo
// Product Manager @ GlobalTech
// Director of IT @ MegaCorp

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Client Satisfait"
          title="Ce que les clients disent à propos de moi"
          description="Fiez-vous à l'expérience de mes clients et découvrez leurs avis."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    {/* <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div> */}
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
