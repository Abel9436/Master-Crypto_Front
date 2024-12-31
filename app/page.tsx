// import Hero from '@/components/Hero'
// import MarketOverview from '@/components/MarketOverview'
// import FeatureHighlights from '@/components/FeatureHighlights'
// import CallToAction from '@/components/CallToAction'
// import Testimonials from '@/components/Testimonials'
// import SubscriptionPopup from '@/components/SubscriptionPopup'
// import FeedbackForm from '@/components/FeedbackForm'

// export default function Home() {
//   return (
//     <div>
//       <Hero />
//       <MarketOverview />
//       <FeatureHighlights />

//       <Testimonials />
//       <FeedbackForm />
//       <CallToAction />
//       <SubscriptionPopup />
//     </div>
//   )
// }

import dynamic from 'next/dynamic';

// Dynamically import all components with potential browser-specific code
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const MarketOverview = dynamic(() => import('@/components/MarketOverview'), { ssr: false });
const FeatureHighlights = dynamic(() => import('@/components/FeatureHighlights'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const FeedbackForm = dynamic(() => import('@/components/FeedbackForm'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/CallToAction'), { ssr: false });
const SubscriptionPopup = dynamic(() => import('@/components/SubscriptionPopup'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
      <MarketOverview />
      <FeatureHighlights />
      <Testimonials />
      <FeedbackForm />
      <CallToAction />
      <SubscriptionPopup />
    </div>
  );
}


