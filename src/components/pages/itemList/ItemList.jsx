import React from "react";
import "./ItemList.css";
import ItemListContainer from "./ItemListContainer";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
	[];

	return (
		<section>
			{items.map((item) => {
				return <ProductCard key={item.id} item={item} />;
			})}
		</section>
	);
};

export default ItemList;
