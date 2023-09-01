import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// kids shoe photos
import kidShoe1 from "../../images/Kids/baby-blue-ones.webp";
import kidShoe2 from "../../images/Kids/gold-ones.webp";
import kidShoe3 from "../../images/Kids/laker-ones.webp";
import kidShoe4 from "../../images/Kids/pink-ones.webp";
import kidShoe5 from "../../images/Kids/retro-high-blue.webp";
import kidShoe6 from "../../images/Kids/unc-ones.webp";
import kidShoe7 from "../../images/Kids/562a07f3-75f4-44bf-803a-73fd5af91d82.webp";
import kidShoe8 from "../../images/Kids/b0b2dd1a-6c45-4139-acfb-b88cf44b4c1e.webp";
import kidShoe9 from "../../images/Kids/cc46d17e-21f6-4645-b19d-bdee428d23f5.webp";
// mens shoe photos
import menShoe1 from "../../images/Mens/13-retro-yellow.webp";
import menShoe2 from "../../images/Mens/jordan-1-zoom-cmft.webp";
import menShoe3 from "../../images/Mens/jordan-37.webp";
import menShoe4 from "../../images/Mens/jordan-crater.webp";
import menShoe5 from "../../images/Mens/jumpman-two-trey.webp";
import menShoe6 from "../../images/Mens/luka-1.webp";
import menShoe7 from "../../images/Mens/mid-se.webp";
import menShoe8 from "../../images/Mens/orange-ones.webp";
import menShoe9 from "../../images/Mens/popsicle-ones.webp";
import menShoe10 from "../../images/Mens/why-not-1.5.webp";
import menShoe11 from "../../images/Mens/zion-2.webp";
// womens shoe photos
import womenShoe1 from "../../images/Women/15a0dd27-f6a2-4a7f-8440-352e85d1b1c8.webp";
import womenShoe2 from "../../images/Women/1aeacbdd-2707-4aaa-9a14-6d0cac02647f.webp";
import womenShoe3 from "../../images/Women/20c74abe-4610-48b6-9571-200029be6129.webp";
import womenShoe4 from "../../images/Women/224a2ae0-20b5-4f0b-bf50-b79448432408.webp";
import womenShoe5 from "../../images/Women/2328271d-27e2-4355-a476-bcf6cbcabbd1.webp";
import womenShoe6 from "../../images/Women/28c581fb-cacf-4f8e-bf59-cb9477aa35f1.webp";
import womenShoe7 from "../../images/Women/7deccac4-b440-46d6-91b2-d7ebfe11d4df.webp";
import womenShoe8 from "../../images/Women/8363a775-08a1-4bee-8067-37ce366983ff.webp";
import womenShoe9 from "../../images/Women/92b663c0-3a52-4447-9de6-2ac28711482c.webp";
import womenShoe10 from "../../images/Women/b7a87e28-a944-463c-be7b-eea0c6e4494f.webp";
import womenShoe11 from "../../images/Women/ca7e0485-47c7-46ed-9b9d-4a049164140d.webp";
import womenShoe12 from "../../images/Women/eb8ba79f-0a73-445e-8b81-67e4594acc1a.webp";
import womenShoe13 from "../../images/Women/f5bc678c-f69a-4ce8-991b-802c2fb11355.webp";
import womenShoe14 from "../../images/Women/metcon-9-womens-workout-shoes-ClFRl8.jpeg";

export const MoreStyles = () => {
  const dataset = [
    { id: "kids1", category: "kids", img: kidShoe1, price: "" },
    { id: "kids2", category: "kids", img: kidShoe2, price: "" },
    { id: "kids3", category: "kids", img: kidShoe3, price: "" },
    { id: "kids4", category: "kids", img: kidShoe4, price: "" },
    { id: "kids5", category: "kids", img: kidShoe5, price: "" },
    { id: "kids6", category: "kids", img: kidShoe6, price: "" },
    { id: "kids7", category: "kids", img: kidShoe7, price: "" },
    { id: "kids8", category: "kids", img: kidShoe8, price: "" },
    { id: "kids9", category: "kids", img: kidShoe9, price: "" },
    { id: "mens1", category: "mens", img: menShoe1, price: "" },
    { id: "mens2", category: "mens", img: menShoe2, price: "" },
    { id: "mens3", category: "mens", img: menShoe3, price: "" },
    { id: "mens4", category: "mens", img: menShoe4, price: "" },
    { id: "mens5", category: "mens", img: menShoe5, price: "" },
    { id: "mens6", category: "mens", img: menShoe6, price: "" },
    { id: "mens7", category: "mens", img: menShoe7, price: "" },
    { id: "mens8", category: "mens", img: menShoe8, price: "" },
    { id: "mens9", category: "mens", img: menShoe9, price: "" },
    { id: "mens10", category: "mens", img: menShoe10, price: "" },
    { id: "mens11", category: "mens", img: menShoe11, price: "" },
    { id: "womens1", category: "womens", img: womenShoe1, price: "" },
    { id: "womens2", category: "womens", img: womenShoe2, price: "" },
    { id: "womens3", category: "womens", img: womenShoe3, price: "" },
    { id: "womens4", category: "womens", img: womenShoe4, price: "" },
    { id: "womens5", category: "womens", img: womenShoe5, price: "" },
    { id: "womens6", category: "womens", img: womenShoe6, price: "" },
    { id: "womens7", category: "womens", img: womenShoe7, price: "" },
    { id: "womens8", category: "womens", img: womenShoe8, price: "" },
    { id: "womens9", category: "womens", img: womenShoe9, price: "" },
    { id: "womens10", category: "womens", img: womenShoe10, price: "" },
    { id: "womens11", category: "womens", img: womenShoe11, price: "" },
    { id: "womens12", category: "womens", img: womenShoe12, price: "" },
    { id: "womens13", category: "womens", img: womenShoe13, price: "" },
    { id: "womens14", category: "womens", img: womenShoe14, price: "" },
  ];

  const mensLength = dataset.filter((item) => {
    return Object.values(item).includes("mens");
  });
  const womensLength = dataset.filter((item) => {
    return Object.values(item).includes("womens");
  });
  const kidsLength = dataset.filter((item) => {
    return Object.values(item).includes("kids");
  });

  useEffect(() => {
    console.log(mensLength);
    console.log(womensLength);
    console.log(kidsLength);
  }, []);

  return (
    <section id="more-styles-section">
    <div className="more-container">
      <h5 id="mens" >More Mens Shoes</h5>{" "}
      <hr style={{ width: "50%", textAlign: "center" }} />
      <InfiniteScroll
        className="infinte-scroll flex center mt5"
        height={400}
        dataLength={mensLength.length}
      >
        {" "}
        <div  className="mens-container">
          {mensLength.map((item) => {
            return (
              <img
                style={{ borderRadius: "4px" }}
                className="scroll-image"
                src={item.img}
                alt={item.id}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      <h5 id="womens" >More Womens Shoes</h5>{" "}
      <hr style={{ width: "50%", textAlign: "center" }} />
      <InfiniteScroll
        className="infinte-scroll flex center mt5"
        height={400}
        dataLength={womensLength.length}
      >
        {" "}
        <div  className="womens-container">
          {womensLength.map((item) => {
            return (
              <img
                style={{ borderRadius: "4px" }}
                className="scroll-image"
                src={item.img}
                alt={item.id}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      <h5 id="kids" >More Kids Shoes</h5>{" "}
      <hr style={{ width: "50%", textAlign: "center" }} />
      <InfiniteScroll
        className="infinte-scroll flex center mt5"
        height={400}
        dataLength={kidsLength.length}
      >
        <div className="kids-container">
          {kidsLength.map((item) => {
            return (
              <img
                style={{ borderRadius: "4px" }}
                className="scroll-image"
                src={item.img}
                alt={item.id}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div></section>
  );
};
