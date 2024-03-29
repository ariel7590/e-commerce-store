import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
	}
`;

export const OptionsContainer = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 950px) {
		width: 60%;
		font-size: 14px;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

export const WelcomeContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-weight: bold;
	font-family: Open Sans;
	font-size: 18px;

	@media screen and (max-width: 800px) {
		width: 100%;
		font-size: 12px;
		margin-left: 10px;
	}
`;
