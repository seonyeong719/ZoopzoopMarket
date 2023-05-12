import MenuBar from 'Components/MenuBar/MenuBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WebHeader = () => {
	return (
		<S.Wrapper>
			<Link to={'/main'}>
				<S.Logo src="/Assets/web_logo.png"></S.Logo>
			</Link>
			<MenuBar />
		</S.Wrapper>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 60%;
	min-width: 700px;
	max-width: 1000px;
	height: 200px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
`;

const Logo = styled.img`
	padding-top: 50px;
	margin-bottom: 50px;
	width: 320px;
`;

const S = {
	Wrapper,
	Logo,
};
