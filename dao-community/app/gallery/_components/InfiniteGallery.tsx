import InfiniteMenu from "@/blocks/Components/InfiniteMenu/InfiniteMenu";

const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "image.png",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const InfiniteGallery = () => {
  return (
    <div style={{ height: "95vh", position: "relative" }} className="bg-background" >
      <InfiniteMenu items={items} />
    </div>
  );
};

export default InfiniteGallery;
