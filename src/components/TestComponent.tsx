import React, { useEffect } from 'react';

export default function TestComponent() {

  useEffect(() => {
    console.log('first')
  }, [])

  return <div>WSR App</div>;
}
