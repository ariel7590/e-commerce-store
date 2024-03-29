import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const dispatch = useDispatch();
	const itemCount = useSelector(selectCartItemsCount);

	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

export default CartIcon;
