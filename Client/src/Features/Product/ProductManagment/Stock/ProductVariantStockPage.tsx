
import { useLocation, useParams } from "react-router-dom";
import ProductColorCircles from "../ProductColorsCircles";
import { useState } from "react";
import ProductSizesAndStocks from "./ProductSizesAndStocks";
import type { Product } from "../../../../app/Models/Product/Product";
import axios from "axios";
import ApiLinks from "../../../../APICalls/ApiLinks";

export default function ProductVariantStockPage() {
  const { productId } = useParams();

  const location = useLocation();

  const [product, setProduct] = useState<Product | null>(location.state?.product);

  const getProduct = async () => {
    const { data } = await axios.get(`${ApiLinks.product.get}/${productId}`)
    setProduct(data?.result);
  }

  if (!product) getProduct();



  const [selectedColor, setSelectColor] = useState<number>(-1);

  const [expanded, setExpanded] = useState<number | boolean>(false);



  const productColorCircles = (
    <ProductColorCircles
      productId={productId}
      setExpanded={setExpanded}
      selectedColor={selectedColor}
      setSelectColor={setSelectColor}
    ></ProductColorCircles>
  );



  const expandedSizeAndStock = expanded == selectedColor && (
    // <div className=" w-1/2 bg-radial from-cyan-100 to-sky-800 rounded-xl shadow-xl/30 border-white border-3 p-3 ">
    <div className=" w-1/2 bg-gradient-to-l from-cyan-500 to-sky-300 rounded-xl shadow-xl/30 border-white border-3 p-3 ">
      <ProductSizesAndStocks
        productId={productId ?? ""}
        selectedColor={selectedColor}
      ></ProductSizesAndStocks>
    </div>
  );

  return (
    <div className="auto flex flex-col gap-3 mt-5 justify-center  items-center">
      <h1 className="text-2xl text-blue-800  font-bold">
        {product?.name}
      </h1>
      <div className="  border-2 border-indigo-100 bg-radial from-gray-200 via-white to-indigo-100 p-5 flex flex-row items-center justify-center sm:flex-row flex-wrap  gap-4 shadow-md/30 rounded-xl">
        {productColorCircles}
      </div>
      {expandedSizeAndStock}
    </div>
  );
}