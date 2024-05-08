import React, { useState } from "react";
import styles from "./search.module.scss";
import SearchUserItem from "./components/search-user-item/SearchUserItem";
import SearchGroupItem from "./components/search-group-item/SearchGroupItem";



export const Search= () => {

    return (
        <div className={styles.menu}>
            <SearchUserItem />
            <SearchUserItem />
            <SearchUserItem />
            <SearchGroupItem />
            <SearchGroupItem />
        </div>
    );
};

export default Search;
