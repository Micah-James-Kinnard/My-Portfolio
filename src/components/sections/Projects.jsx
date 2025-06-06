import { RevealOnScroll } from "../RevealOnScroll";
import cardTriop from "../../assets/Card_Tri_OP_Image.png";
import chessThatWorks from "../../assets/Chess_That_Works_Image.png";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Card Tri-op
              </h3>
              <img
                src={cardTriop}
                alt="Card Tri-op Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                Trio game developped for FBLA, made with 2 of my close friends.
                Focusing on the backend, used Javascript & some HTML to make.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "HTML5", "css", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Micah-James-Kinnard/FBLA-Trio-Project"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                Chess that works
              </h3>
              <img
                src={chessThatWorks}
                alt="Card Tri-op Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                Chess game I originally started working on because I wanted to
                make a game, turned into a school project once capstones came
                around
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "css", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Micah-James-Kinnard/chess_that_works"
                  className="text-purple-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
