import React, { useState } from "react";
import SearchForm from "./SearchForm";
import * as foodyService from "../../services/foodyService";
import ResultListFromSearch from "./ResultListFromSearch";

export const SearchRestaurant = () => {
  const [restaurantSearchResult, setRestaurantSearchResult] = useState(null);
  const onSubmit = () => (values) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const payload = {
          food_types: values.foodTypes.map((r) => r.value.id),
          cuisine: values.restaurantTypes.map((r) => r.value.id),
          distance: values.distance.value,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        foodyService.submitSearchForm(payload).then((res) => {
          setRestaurantSearchResult(res.data);
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <SearchForm onSubmit={() => onSubmit} />
      <ResultListFromSearch restaurantSearchResult={restaurantSearchResult} />
    </div>
  );
};
