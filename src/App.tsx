/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import ProductCard from "./commponets/ProductCard";
import Modal from "./commponets/ui/Modal";
import { formInputsList, productList } from "./data";
import Button from "./commponets/ui/Button";
import Input from "./commponets/ui/Input";
import { IProduct } from "./interfaces";

const App = () => {
  /*------------ State ------------ */
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  });

  /*------------ Handler ------------ */
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  /*------------ Render ------------ */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} {...product} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        className="mb-2 text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));
  console.log(product);
  

  return (
    <main className="container m-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        ADD
      </Button>

      <div className=" border-2 border-500 m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center justify-between space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button className="bg-gray-400 hover:bg-gray-500">Close</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
