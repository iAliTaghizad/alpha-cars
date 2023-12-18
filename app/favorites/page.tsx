
import EmptyState from "@/app/components/emptyState";
import ClientOnly from "@/app/components/clientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListing";

import FavoritesClient from "./favoriteClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="!علاقه مندیی یافت نشد"
          subtitle="!شما خودرویی را به لیست علاقه مندیتان اضافه نکرده اید"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;