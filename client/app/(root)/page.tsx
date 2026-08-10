import BestSellers from "@/components/Shared/BestSellers";
import NewArrivals from "@/components/Shared/NewArrivals";
import GroupCategories from "@/components/Shared/GroupCategories";
import { getData } from "@/lib/utils";
import _ from "lodash";
import ShopByCategory from "@/components/Shared/ShopByCategory";
import { StructuredData } from "@/components/structured-data";
export const dynamic = "force-dynamic";

export default async function Home() {
  const collections = await getData(`/api/collections?active=true`);
  const newArrivals = await getData(`/api/products?new-arrivals`);
  const bestSellers = await getData(`/api/products?best-sellers`);
  const shopByCategory = await getData(`/api/products?shop-by-category`);

  const hadJSON = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Ecomvera",
    url: "https://ecomvera.com/",
    logo: "https://ecomvera.com/logo.png",
    description:
      "Ecomvera offers premium shirts & t-shirts with same-day delivery. Shop the latest fashion trends at unbeatable prices.",
    sameAs: [
      "https://www.instagram.com/ecomvera",
      "https://www.facebook.com/ecomvera",
      "https://www.youtube.com/c/ecomvera",
      "https://twitter.com/ecomvera",
      "https://www.linkedin.com/company/ecomvera",
      "https://www.pinterest.com/ecomvera",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6399269102",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0.00",
        currency: "INR",
      },
      deliveryTime: {
        "@type": "DeliveryTime",
        businessDays: "https://schema.org/SameDayDelivery",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 30,
          unitCode: "MIN",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 30,
          unitCode: "MIN",
        },
      },
    },
  };
  return (
    <>
      <StructuredData data={hadJSON} />

      <div className="h-full min-h-[calc(100vh-100px)] pb-16">
        {/* <GalleryCollections collections={_.filter(collections, { isGallery: true })} /> */}
        <GroupCategories collections={_.filter(collections, { isGallery: false })} />

        <NewArrivals data={newArrivals} />

        <ShopByCategory data={shopByCategory} />

        <BestSellers data={bestSellers} />
      </div>
    </>
  );
}
