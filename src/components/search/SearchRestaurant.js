import React from 'react';
import { ResultListFromSearch } from './ResultListFromSearch';
import { SearchForm } from './SearchForm'


export const SearchRestaurant = () => {
    return(
        <div>
            <SearchForm />
            <ResultListFromSearch />
        </div>
    )
}

 
