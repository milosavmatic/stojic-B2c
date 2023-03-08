import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/Breadcrumbs"));
const ProductDetails = dynamic(() => import("../../components/ProductDetails"));
import { ApiHandler } from "../api/api";
import { generateBreadcrumbs } from "../../helpers/generateBreadCrumbs";
import { useRouter } from "next/router";
import Seo from "../../components/Seo/Seo";

const ProductPage = ({
  basic_data,
  breadcrumbs,
  gallery,
  specifications,
  recommendedProducts,
}) => {
  const { asPath } = useRouter();

  console.log(basic_data.data.item.basic_data.name)
  return (
    <>
      <Seo title={`${basic_data.data.item.basic_data.name}`} />
      <div className="container">
        <Breadcrumbs
          crumbs={generateBreadcrumbs(
            { label: "Početna", path: "/" },
            "/kategorije",
            breadcrumbs.steps,
            { label: breadcrumbs.end.name, path: asPath }
          )}
        />
        <ProductDetails
          productData={basic_data.data.item}
          gallery={gallery}
          specifications={specifications}
          recommendedProducts={recommendedProducts}
        />
      </div>
    </>
  );
};

export default ProductPage;

export const getServerSideProps = async (context) => {
  const api = ApiHandler();
  const { productSlug } = context.query;
  return {
    props: {
      basic_data: await api
        .get(`/product-details/basic-data/${productSlug}`)
        .then((response) => response?.payload),
      breadcrumbs: await api
        .get(`/product-details/breadcrumbs/${productSlug}`)
        .then((response) => response?.payload),
      gallery: await api
        .get(`/product-details/gallery/${productSlug}`)
        .then((response) => response?.payload),
      specifications: await api
        .get(`/product-details/specification/${productSlug}`)
        .then((response) => response?.payload),
      recommendedProducts: await api
        .list(`/product-details/recommended/${productSlug}`)
        .then((response) => response?.payload?.items),
    },
  };
};
