export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  // Returns an object
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description = "Product description must be at least 900 characters";
  }
  if (!product.price.trim() || !validUrl) {
    errors.imageURL = "Image URL is not valid";
  }

  if (!product.price.trim() ||  isNaN(Number(product.price)) || Number(product.price) < 0) {
    errors.price = "Price must be greater than 0";
  } 

  return errors;
};
