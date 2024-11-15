import Article from "../components/Article";

const articles = [
  {
    id: 1,
    date: "2021-10-01",
    title: "Quantum Entanglement: The Spooky Action at a Distance",
    content:
      "Quantum entanglement is a phenomenon in quantum physics where two particles become interconnected in such a way that the state of one particle instantly influences the state of the other, no matter how far apart they are. This 'spooky action at a distance,' as Albert Einstein famously called it, challenges our classical understanding of the world. Entanglement has been experimentally verified and is a fundamental aspect of quantum mechanics, playing a crucial role in quantum computing and quantum cryptography. This article explores the history, principles, and implications of quantum entanglement, shedding light on one of the most intriguing phenomena in modern physics.",
  },
  {
    id: 2,
    date: "2021-10-15",
    title: "The Science of Star Trek: Exploring the Final Frontier",
    content:
      "The Science of Star Trek: Exploring the Final Frontier delves into the scientific principles and theories that underpin the iconic science fiction series. From warp drives and teleportation to alien life forms and advanced medical technologies, Star Trek has inspired generations of scientists and engineers to push the boundaries of what is possible. While some of the technologies depicted in the series remain purely fictional, others have found real-world applications or are the subject of ongoing research. This article explores the fascinating intersection of science fiction and reality, highlighting the ways in which Star Trek has influenced scientific thought and innovation. Live long and prosper!",
  },
  {
    id: 3,
    date: "2021-11-01",
    title: "The Future of Space Travel: Understanding Warp Engines",
    content:
      "Warp engines, a staple of science fiction, represent a theoretical method of faster-than-light travel. The concept involves bending or 'warping' space-time around a spacecraft, allowing it to travel vast distances in a fraction of the time it would take using conventional propulsion methods. While warp engines remain speculative, recent advancements in theoretical physics, such as the Alcubierre drive, have provided a framework for understanding how such technology might be possible. This article explores the principles behind warp engines, the challenges that must be overcome, and the potential implications for the future of space travel. Engage!",
  },
];

const Home = () => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
};

export default Home;
