import { useEffect } from 'react';
import { useXMPieData } from '@/hooks/useXMPieData';

// This component creates a data layer for XMPie tracking and analytics
// It can be extended to send tracking data to XMPie Circle/uStore

interface XMPieDataLayerProps {
  children: React.ReactNode;
}

const XMPieDataLayer = ({ children }: XMPieDataLayerProps) => {
  const { recipient, tracking, isPersonalized } = useXMPieData();

  useEffect(() => {
    // Initialize XMPie tracking data layer
    // This can be picked up by XMPie tracking scripts
    (window as any).xmpieDataLayer = {
      recipient,
      tracking,
      isPersonalized,
      pageInfo: {
        url: window.location.href,
        title: document.title,
        timestamp: new Date().toISOString(),
      },
    };

    // Log page view for XMPie tracking
    if (tracking?.recipientId) {
      console.log('[XMPie] Page view tracked:', {
        recipientId: tracking.recipientId,
        purlCode: tracking.purlCode,
        campaignId: tracking.campaignId,
      });
    }
  }, [recipient, tracking, isPersonalized]);

  return <>{children}</>;
};

export default XMPieDataLayer;
