import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
	const priceState = {
		prices: [100, 200, 300],
		position: ["Balcony", "Medium", "Star"],
		desc: [
			"At vero anditiis praesentium rupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.",
			"culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
			"am libero tempore kjhsdfbjhfd maxime placeat facere possimus, omnis voluptas assumenda.",
		],
		linkTo: ["http://sales.com", "http://facebook.com", "http://carsales.com"],
		delay: [500, 0, 500],
	};

	const showBoxes = () =>
		priceState.prices.map((box, index) => (
			<Zoom
				key={index}
				className="pricing_item"
				delay={priceState.delay[index]}
			>
				<div className="pricing_inner_wrapper">
					<div className="pricing_title">
						<span>${priceState.prices[index]}</span>
						<span>{priceState.position[index]}</span>
					</div>
					<div className="pricing_description">{priceState.desc[index]}</div>
					<div className="pricing_buttons">
						<MyButton
							text="Purchase"
							style={{
								color: "#ffffff",
							}}
							link={priceState.linkTo[index]}
						/>
					</div>
				</div>
			</Zoom>
		));

	return (
		<div className="bck_black">
			<div className="center_wrapper pricing_section">
				<h2>Pricing</h2>
				<div className="pricing_wrapper">{showBoxes()}</div>
			</div>
		</div>
	);
};

export default Pricing;
