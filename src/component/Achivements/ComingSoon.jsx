// src/component/ComingSoon.jsx
import React from 'react';

const ComingSoon = ({ page = "This page" }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🚧 {page} is Coming Soon!</h1>
      <p>We’re working on it. Please check back soon!</p>
    </div>
  );
};

export default ComingSoon;
