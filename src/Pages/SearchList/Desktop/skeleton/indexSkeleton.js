import { Skeleton } from '@mui/material';
import { theme } from 'Styles/theme';
import styled from 'styled-components';

const IndexSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4, 5, 6];
	return (
		<S.Wrapper>
			<S.Container>
				<S.ResultText>
					<Skeleton
						variant="text"
						width="100%"
						height={70}
						color="black"
						animation="wave"
					/>
				</S.ResultText>

				<S.Category>중고 아이템</S.Category>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox>
							<Skeleton
								animation="wave"
								key={index}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
									bgcolor: theme.color.gray[100],
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
				<S.Category>무료 아이템</S.Category>
				<S.SkeletonContainer>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>

					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>
					<Skeleton
						variant="rectangular"
						width="100%"
						height={370}
						color="black"
					/>
				</S.SkeletonContainer>
			</S.Container>
		</S.Wrapper>
	);
};

export default IndexSkeleton;
const SkeletonBox = styled.div`
	width: 100%;
	min-width: 200px;
	max-width: 280px;
	height: 370px;
	border: 1px solid green;
	border-radius: 10px;
`;
const SkeletonContainer = styled.div`
	display: grid;
	width: 100%;
	margin-top: 30px;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(280px, 1fr));
		column-gap: 10px;
		row-gap: 10px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(280px, 1fr));
		column-gap: 20px;
		row-gap: 20px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(220px, 1fr));

		column-gap: 10px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(260px, 1fr));
		column-gap: 40px;
		row-gap: 40px;
	}
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;

	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
`;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const ResultText = styled.div`
	display: flex;
	margin-top: 40px;
	//margin-left: 40px;
	/* flex-direction: column; */
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const Category = styled.div`
	margin-top: 40px;
	margin-bottom: 10px;
`;

const S = {
	Wrapper,
	Container,
	ResultText,
	Category,
	SkeletonContainer,
	SkeletonBox,
};
