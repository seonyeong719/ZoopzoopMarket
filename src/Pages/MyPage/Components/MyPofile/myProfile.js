import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import MyPageApi from 'Apis/myPageApi';
import UserApi from 'Apis/userApi';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MannerMeter from 'Components/Icon/Icon';

const MyProfile = () => {
	const [userInfo, setUserInfo] = useState('');
	const [userProfile, setUserProfile] = useState('');
	const photoInput = useRef();

	const getUserInfo = async () => {
		try {
			const res = await UserApi.userInfo(); // userInfo => email, nick_name, phone, profile_url, region, x, y
			setUserInfo(res);
			console.log(userInfo);
		} catch (err) {
			console.log(err);
		}
	};

	const getUserProfile = async () => {
		try {
			const res = await MyPageApi.myMainPage(); // userProfile => User(nickName, profileUrl), chatCount, likeCount, ondo, productsCount
			setUserProfile(res);
		} catch (err) {
			console.log(err);
		}
	};

	// 프로필 사진 수정 틀
	const profileImgEdit = async e => {
		const formData = new FormData();
		const file = e.target.files[0];
		formData.append('profile_url', file);

		console.log(file);
		try {
			const res = await UserApi.userProfileEdit(formData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	// 클릭시 사진 수정
	const handleClick = () => {
		photoInput.current.click();
	};

	//
	// 이미지 미리보기 업로드
	// const onClickFile = e => {
	// 	const file = e.target.files[0];
	// 	// setProfileImg(file);
	// 	reader.readAsDataURL(file);

	// 	const reader = new FileReader();
	// 	reader.onload = () => {
	// 		setProfileImg(reader.result || null);
	// 	};
	// };

	useEffect(() => {
		getUserInfo();
		getUserProfile();
	}, []);

	const { region } = userInfo && userInfo.data;
	const { User, ondo } = userProfile && userProfile.data;

	return (
		<S.Wrapper>
			<S.Info>
				<S.ImgWrap>
					{userInfo && (
						<S.Img
							src={
								userInfo.data.profile_url
									? userInfo.data.profile_url
									: '/Assets/Images/기본 프로필.png'
							}
						/>
					)}
					<S.ProfileImg>
						<FontAwesomeIcon
							icon={faCamera}
							style={{ color: '#ffffff', fontSize: '25px' }}
							onClick={handleClick}
						/>
						<input
							type="file"
							accept="image/jpg, image/jpeg, image/png"
							multiple
							ref={photoInput}
							style={{ display: 'none' }}
							onChange={e => profileImgEdit(e)}
						/>
					</S.ProfileImg>
				</S.ImgWrap>

				<S.Detail>
					<div>
						반가워요<S.Nickname>고라니</S.Nickname>님!
					</div>
					<S.Icon>
						현재 매너온도는<S.Temp>36도</S.Temp>입니다 :)
					</S.Icon>
					<div>
						활동지역<S.Address>#경기도 화성시 반송동</S.Address>
					</div>
				</S.Detail>
			</S.Info>		
		</S.Wrapper>
	);
};

export default MyProfile;

const Wrapper = styled.div`
	width: 100%;
	height: 170px;
	border-top: solid 1px #e9e9e9;
	border-bottom: solid 1px #e9e9e9;
	${flexAllCenter}
`;

const Info = styled.div`
	display: flex;
`;

const Img = styled.img`
	width: 150px;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
`;

const ImgWrap = styled.div`
	position: relative;
	margin-right: 50px;
`;

const ProfileImg = styled.div`
	background-color: ${({ theme }) => theme.color.primary[400]};
	padding: 13px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	cursor: pointer;
`;

const Detail = styled.div`
	margin-left: 60px;
	line-height: 2rem;
	/* & :nth-child(3) {
		margin-top: 15px;
	} */
`;

const List = styled.div`
	height: max-content;
	display: flex;
	margin: 5px;
`;

const InfoTitle = styled.div`
	width: 80px;
	height: max-content;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.gray[300]};
`;

const InfoContent = styled.div`
	margin-left: 30px;
	font-size: ${({ theme }) => theme.fontSize.base};
`;
const S = {
	Wrapper,
	Info,
	Detail,
	ProfileImg,
	ImgWrap,
	List,
	InfoTitle,
	InfoContent,
	Img,
};
