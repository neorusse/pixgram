import React from 'react';

const Home = (props) => {
	return (
		<div class="container">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-md-6 mt-5 mb-5">
						<img
							src="./pixgram-pic.png"
							class="img-fluid mx-auto d-block"
							alt="pixgram"
						></img>
					</div>
					<div class="col-md-6">
						<p class="caption-text">
							Perfect Collection of Unforgetable <br></br> Experience and
							Lasting Memory
						</p>
						<p class="caption-text-sub">
							They say a picture is worth a thousand words. But I wonder, what
							else do “they” say? <br></br> Secure and Safely Stored, You can
							count on PixaGram for Precise Photographic Memory.
						</p>
						<p
							class="landing-btn"
							onClick={() => props.history.push('/register')}
						>
							Sign Up Today, It's Free
						</p>
					</div>
				</div>
			</div>
			<div class="mx-auto mt-4 mb-1 d-flex justify-content-around align-self-center">
				{' '}
				<a
					class="text-dark"
					href="https://pixgram.com/about"
					target="_blank"
					rel="noopener noreferrer"
				>
					About
				</a>{' '}
				<a
					class="text-dark"
					href="https://pixgram.com/legal/privacy"
					target="_blank"
					rel="noopener noreferrer"
				>
					Privacy
				</a>{' '}
				<a
					class="text-dark"
					href="https://pixgram.com/legal/terms"
					target="_blank"
					rel="noopener noreferrer"
				>
					Terms
				</a>{' '}
				<a
					class="text-dark"
					href="https://pixgram.com/explore/locations"
					target="_blank"
					rel="noopener noreferrer"
				>
					Location
				</a>
			</div>
		</div>
	);
};

export default Home;
