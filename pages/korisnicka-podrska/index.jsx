import React from 'react';
import { PagePreparation } from '../../components/PagePreparation/PagePreparation';
import Seo from '../../components/Seo/Seo';

function CustomerSupport() {
  return (
    <>
      <Seo title="Korisnička podrška" />
      <div className="staticPages">
        <div className="container">
          <h3>Korisnička podrška</h3>
          <div className="staticPagesContent">
            <PagePreparation />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSupport;
