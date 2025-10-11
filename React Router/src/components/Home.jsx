import React from "react";
import "./Home.css"; // optional external styling file

const Home = () => {
  const articles = [
    {
      id: 1,
      title: "Global Markets Show Signs of Recovery Amid Uncertainty",
      description:
        "After months of volatility, global financial markets are showing early signs of stabilization as investors regain confidence.",
      image: "https://worldview.stratfor.com/sites/default/files/styles/2x1_full/public/Global%20Macro%20GettyImages-1402582158.jpg?itok=TR4dCtvF",
      category: "Business",
    },
    {
      id: 2,
      title: "New Climate Report Warns of Accelerating Sea Level Rise",
      description:
        "A UN-backed study reveals that polar ice melt is now contributing to sea level rise faster than predicted a decade ago.",
      image: "https://mundogeo.com/wp-content/uploads/2024/06/11115708/Unesco-report-warns-of-accelerated-global-warming-and-rising-sea-levels-783x400.jpg",
      category: "Environment",
    },
    {
      id: 3,
      title: "AI Revolution: How Artificial Intelligence is Reshaping Media",
      description:
        "From automated writing to smart fact-checking, AI is transforming how news is produced and consumed around the world.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQF-idPW0PMqEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699073246550?e=2147483647&v=beta&t=4CeRnmq3WuTfen9eu1pTXJdmhnBLKo2i3M6RbQinlgg",
      category: "Technology",
    },
  ];

  return (
    <div className="home">
      <header className="hero">
        <h1>The Fact Forge</h1>
        <p>Your daily dose of verified and fearless journalism 🔥</p>
      </header>

      <section className="articles">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="card-body">
              <span className="category">{article.category}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
