/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ProductCard from "./commponets/ProductCard";
import Modal from './commponets/ui/Modal';
import { productList } from "./data";
import Button from "./commponets/ui/Button";

const App = () => {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} {...product} product={product} />
  ));
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <main className="container m-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        ADD
      </Button>

      <div className=" border-2 border-500 m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Add New Product">
        <div className="flex items-center justify-between space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-400">Close</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
