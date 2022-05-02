import Link from "next/link";
import Image from "next/image";
import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	overflow: visible;
	height: 20px;
	line-height: 1000px;
	padding: 10px;
	opacity: 100%;
	img {
		height: 100%;
		width: 100%;
		transition: opacity 250ms ease, transform 250ms ease;
	}

	&:hover img {
		opacity: 60%;
		transform: rotate(10deg) scale(0.9);
	}
`;

const Logo = () => {
	const footPrintImg = `/images/cat${useColorModeValue(
		"-light",
		"-dark"
	)}.png`;

	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image
						src={footPrintImg}
						width={19}
						height={20}
						alt="logo"
					/>
					pablo
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
