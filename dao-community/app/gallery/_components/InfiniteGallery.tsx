import InfiniteMenu from "@/blocks/Components/InfiniteMenu/InfiniteMenu";

const items = [
  {
    image: "/gallery/image1.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
    {
    image: "/gallery/image2.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
    {
    image: "/gallery/image3.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
    {
    image: "/gallery/image4.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
    {
    image: "/gallery/image5.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },  {
    image: "/gallery/image6.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },  {
    image: "/gallery/image7.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },  {
    image: "/gallery/image8.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
   {
    image: "/gallery/image9.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },  {
    image: "/gallery/image10.jpg",
    link: "https://google.com/",
    title: "",
    description: "",
  },
];

const InfiniteGallery = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }} className="bg-background" >
      <InfiniteMenu items={items} />
    </div>
  );
};

export default InfiniteGallery;
