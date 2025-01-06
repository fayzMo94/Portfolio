import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contactSection" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Collaborons pour réaliser l’exceptionnel
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Prêt à donner vie à votre prochain projet ? Entrons en contact
                et discutons de la manière dont je peux vous aider à atteindre
                vos objectifs.
              </p>
            </div>
            <div>
              <a
                href="mailto:fayzmohamedpro94@gmail.com"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer z-90 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="font-semibold">Contactez-moi</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
