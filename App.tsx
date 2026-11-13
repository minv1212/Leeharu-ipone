import React, { useState } from 'react';

export default function IPhoneSimulator() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' }}>
      <div style={{ width: '375px', height: '812px', backgroundColor: '#000', borderRadius: '40px', padding: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>iPhone Simulator</h1>
          <p style={{ color: '#666', marginTop: '10px' }}>정상적으로 연결되었습니다!</p>
        </div>
      </div>
    </div>
  );
}
