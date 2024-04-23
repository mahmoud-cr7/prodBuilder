import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface Iprops {
  product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageURL, price, category, colors } = product;

    const renderColor = colors.map((color) => (
      <CircleColor
        key={color}
        color={color}

      />
    ));
  return (
    <div className="border p-2 rounded-md  flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image
        imageUrl={imageURL}
        alt={title}
        className="rounded-md h-52 w-full lg:object-cover"
      />
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center my-4 space-x-2">{renderColor}</div>


      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">${price}</span>
        <Image
          imageUrl={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex justify-between items-center space-x-2 mt-2">
        <Button
          className="bg-indigo-700"
          onClick={() => {
            console.log("edit");
          }}
        >
          Edit
        </Button>
        <Button className="bg-red-700 ">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
//  !== w-10 h-10 rounded-full
