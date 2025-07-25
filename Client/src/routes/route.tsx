import { createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import CustomerForm from "../Features/CustomerForm";
import ColorManagement from "../Features/Colors/ColorManagement";
import { ColorProvider } from "../Contexts/color/colorProvider";
import { SizeProvider } from "../Contexts/size/sizeProvider";
import SizeManagement from "../Features/Sizes/SizeManagement";
import ProductPage from "../Features/Product/ProductsPage";
import ProductVariantStockPage from "../Features/Product/ProductManagment/Stock/ProductVariantStockPage";
import CustomerList from "../Features/CustomersList";
import CreateProduct from "../Features/Product/CreateProduct/CreateProduct";
import { NavigationLinks } from "../Navigations/NavigationLinks";
import ProductVariantPricePage from "../Features/Product/ProductManagment/Price/ProductPricePage"; 
import ProductPriceRangeEditPage from "../Features/Product/ProductManagment/Price/ProductPriceRange/ProductPriceRangeEditPage";
import CreateProductQuantityPrice from "../Features/Product/ProductManagment/Price/Offers/CreateProductQuantityPrice";
import ManageDelivery from "../Features/Delivery/ManageDelivery";
import CreateDeliveryCompany from "../Features/Delivery/DeliveryCompany/CreateDeliveryCompany";
import DeliveryCompanyPage, { DeliveryCompanyGovernorateList } from "../Features/Delivery/DeliveryCompany/DeliveryCompanyPage";
import { ManageCustomerGovernorateDeliveryList } from "../Features/Delivery/ManageCustomerGovernorateDeliveryList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/createOrder", element: <CustomerForm></CustomerForm> },
      {
        path: "/m/colors",
        element: (
          <ColorProvider>
            <ColorManagement></ColorManagement>
          </ColorProvider>
        ),
      },
      {
        path: "/m/sizes",
        element: (
          <SizeProvider>
            <SizeManagement></SizeManagement>
          </SizeProvider>
        ),
      },
      {
        // path: '/m/product', element: <CreateProduct  ></CreateProduct>
        path: "/productsPage",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "/m/createProduct",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: `${NavigationLinks.product.productStock}/:productId`,
        element: <ProductVariantStockPage></ProductVariantStockPage>,
      },
      {
        path: "/ManageCustomers",
        element: <CustomerList></CustomerList>,
      },
      {
        path: `${NavigationLinks.product.productPrice}/:productId`,
        element: <ProductVariantPricePage></ProductVariantPricePage>,
      },
      {
        path: `${NavigationLinks.product.productPrice}/:productId/editMode`,
        element: <ProductPriceRangeEditPage></ProductPriceRangeEditPage>,
      },
      {
        path: `${NavigationLinks.product.productQuantityPrice}/:productId`,
        element: <CreateProductQuantityPrice></CreateProductQuantityPrice>,
      },
      {
        path: `${NavigationLinks.deliveryManagement.manageDelivery}`,
        element: <ManageDelivery></ManageDelivery>,
      },
      {
        path:  `${NavigationLinks.deliveryManagement.deliveryCompany.page}/:id`,
        element : <DeliveryCompanyPage></DeliveryCompanyPage>
      } ,
      {
        path:  `${NavigationLinks.deliveryManagement.deliveryCompany.governorates}/:id`,
        element : <DeliveryCompanyGovernorateList></DeliveryCompanyGovernorateList>
      } ,
      {
        path:  `${NavigationLinks.deliveryManagement.governorate.all}`,
        element : <ManageCustomerGovernorateDeliveryList></ManageCustomerGovernorateDeliveryList>
      } ,
    ],
  },
]);
