import MannerMeter from 'Components/Icon/Icon';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import ProductImg from './ProductImg/productImg';
import Profile from 'Components/Profile/Desktop/profile';
import { useNavigate } from 'react-router';

const DetailHead = () => {
	const navigate = useNavigate();

	return (
		<S.Wrapper>
			<ProductImg />
			<S.ProductWrapper>
				<S.UserProfile>
					<Profile />
					<ul>
						<li>판매자 닉네임</li>
						<li>위치 (동까지)</li>
					</ul>
				</S.UserProfile>
				<S.UserProfileDetail>
					<ul>
						<MannerMeter />
						<li>매너점수</li>
						<li>총 거래건수 : OO건</li>
					</ul>
				</S.UserProfileDetail>
			</S.ProductWrapper>
		</S.Wrapper>
	);
};

export default DetailHead;

const Wrapper = styled.div`
	& > * {
		margin-bottom: 20px 0;
	}
	& > div:first-child {
		border: 1px solid;
		height: 400px;
		${flexAllCenter}
		background-color: #d9d9d9;
	}
`;

const ProductWrapper = styled.div`
	border: 1px solid;
	${flexAllCenter}
	justify-content: space-between;
`;

const UserProfile = styled.div`
	${flexAllCenter}
	& > ul {
		margin-left: 20px;
		& > li:first-child {
			font-size: ${({ theme }) => theme.fontSize.md};
			font-weight: ${({ theme }) => theme.fontWeight.bold};
			margin-bottom: 5px;
		}
		& > li {
			margin: 5px 0;
		}
	}
`;

const UserProfileDetail = styled.div`
	text-align: right;
	& > ul > * {
		margin: 10px 0;
	}
`;

const S = {
	Wrapper,
	ProductWrapper,
	UserProfile,
	UserProfileDetail,
};
