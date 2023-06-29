import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ item }) => {
	return (
		<Card sx={{ width: 345 }}>
			<CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{item.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="contained">
					Share
				</Button>
				<Button size="small" variant="contained">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
