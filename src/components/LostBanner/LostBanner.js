import React from 'react';
import Banner from '../Banner/Banner';
function LostBanner({answer}) {
  return (
    <Banner status="sad">
    <p>
      <strong>Sorry!</strong> The correct answer is <strong>{answer}</strong>.
    </p>
  </Banner>
  );
}

export default LostBanner;
