"use client"

import dynamic from 'next/dynamic'

const AnimatedBackgroundContent = () => {
  // Your existing animated background component code here
  return (
    <div>
      {/* ... your component content */}
    </div>
  )
}

// Create a dynamic component with SSR disabled
const AnimatedBackground = dynamic(() => Promise.resolve(AnimatedBackgroundContent), {
  ssr: false
})

export default AnimatedBackground 