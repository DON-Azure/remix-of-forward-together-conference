import { useState, useEffect } from 'react';
import { XMPieRecipient, XMPieTrackingData, DEFAULT_RECIPIENT } from '@/types/xmpie';

// This hook extracts XMPie personalization data from URL parameters
// XMPie Circle/uStore will generate PURLs with recipient data encoded in the URL

export const useXMPieData = () => {
  const [recipient, setRecipient] = useState<XMPieRecipient>(DEFAULT_RECIPIENT);
  const [tracking, setTracking] = useState<XMPieTrackingData | null>(null);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const parseXMPieParams = () => {
      const params = new URLSearchParams(window.location.search);
      
      // XMPie PURL parameters - these are set by XMPie when generating personalized URLs
      const firstName = params.get('fn') || params.get('firstName') || params.get('ADOR_FirstName');
      const lastName = params.get('ln') || params.get('lastName') || params.get('ADOR_LastName');
      const email = params.get('em') || params.get('email') || params.get('ADOR_Email');
      const recipientId = params.get('rid') || params.get('recipientId') || params.get('ADOR_RecipientID');
      const purlCode = params.get('purl') || params.get('purlCode') || params.get('ADOR_PURLCode');
      const campaignId = params.get('cid') || params.get('campaignId') || params.get('ADOR_CampaignID');

      // Check if any personalization data is present
      if (firstName || lastName || email || recipientId) {
        const personalizedRecipient: XMPieRecipient = {
          firstName: firstName || DEFAULT_RECIPIENT.firstName,
          lastName: lastName || DEFAULT_RECIPIENT.lastName,
          fullName: firstName && lastName ? `${firstName} ${lastName}` : DEFAULT_RECIPIENT.fullName,
          email: email || DEFAULT_RECIPIENT.email,
          company: params.get('company') || params.get('ADOR_Company') || undefined,
          title: params.get('title') || params.get('ADOR_Title') || undefined,
        };

        setRecipient(personalizedRecipient);
        setIsPersonalized(true);

        // Set up tracking data
        if (recipientId || purlCode) {
          setTracking({
            recipientId: recipientId || '',
            campaignId: campaignId || '',
            purlCode: purlCode || '',
            timestamp: new Date().toISOString(),
            pageViews: 1,
            formSubmissions: 0,
          });
        }
      }

      setIsLoading(false);
    };

    parseXMPieParams();
  }, []);

  return {
    recipient,
    tracking,
    isPersonalized,
    isLoading,
  };
};

export default useXMPieData;
