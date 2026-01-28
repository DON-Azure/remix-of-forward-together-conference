// XMPie Variable Data Types and Configuration
// These interfaces define the structure for XMPie ADOR (Asset Data Object Repository) fields

export interface XMPieRecipient {
  // Core personalization fields - these map to XMPie ADOR placeholders
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  
  // Optional custom fields
  company?: string;
  title?: string;
  customField1?: string;
  customField2?: string;
}

export interface XMPieTrackingData {
  recipientId: string;
  campaignId: string;
  purlCode: string;
  timestamp: string;
  pageViews: number;
  formSubmissions: number;
}

export interface XMPieFormSubmission {
  recipientId: string;
  purlCode: string;
  name: string;
  email: string;
  businessMeeting: boolean;
  galaEvening: boolean;
  accommodation: boolean;
  submittedAt: string;
}

// XMPie ADOR placeholder syntax
// In XMPie templates, these are replaced with actual recipient data
// Format: @@ADOR.FieldName@@ or {ADOR:FieldName}
export const XMPIE_PLACEHOLDERS = {
  FIRST_NAME: '@@ADOR.FirstName@@',
  LAST_NAME: '@@ADOR.LastName@@',
  FULL_NAME: '@@ADOR.FullName@@',
  EMAIL: '@@ADOR.Email@@',
  COMPANY: '@@ADOR.Company@@',
  RECIPIENT_ID: '@@ADOR.RecipientID@@',
  PURL_CODE: '@@ADOR.PURLCode@@',
  CAMPAIGN_ID: '@@ADOR.CampaignID@@',
} as const;

// Default values for development/preview mode
export const DEFAULT_RECIPIENT: XMPieRecipient = {
  firstName: '[First Name]',
  lastName: '[Last Name]',
  fullName: '[Full Name]',
  email: '[email@example.com]',
  company: '[Company]',
  title: '[Title]',
};
