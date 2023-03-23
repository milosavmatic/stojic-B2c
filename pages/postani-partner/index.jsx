import React from 'react';
import dynamic from 'next/dynamic';

const PagePreparation = dynamic(() => import('../../components/PagePreparation/PagePreparation'));
const Seo = dynamic(() => import('../../components/Seo/Seo'));

const BecomeaPartner = () => (
	<>
		<Seo
			title="Postani partner"
			description="Postani partner"
			ogtitle="Postani partner"
			ogdescription="Postani partner"
			// ogurl={`${process.env.BASE_URL}postani-partner`}
		/>
		<div className="staticPages">
			<div className="container">
				<h3>Postani naš partner</h3>
				<div className="staticPagesContent">
					<PagePreparation />
				</div>
			</div>
		</div>
	</>
);

export default BecomeaPartner;
