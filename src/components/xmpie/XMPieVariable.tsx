import { useXMPieData } from '@/hooks/useXMPieData';
import { XMPIE_PLACEHOLDERS, DEFAULT_RECIPIENT } from '@/types/xmpie';

type VariableField = 'firstName' | 'lastName' | 'fullName' | 'email' | 'company' | 'title';

interface XMPieVariableProps {
  field: VariableField;
  className?: string;
  // When true, outputs XMPie ADOR syntax for print templates
  printMode?: boolean;
}

// This component renders personalized content or XMPie ADOR placeholders
const XMPieVariable = ({ field, className, printMode = false }: XMPieVariableProps) => {
  const { recipient, isPersonalized } = useXMPieData();

  // For print templates, return ADOR syntax
  if (printMode) {
    const adorMap: Record<VariableField, string> = {
      firstName: XMPIE_PLACEHOLDERS.FIRST_NAME,
      lastName: XMPIE_PLACEHOLDERS.LAST_NAME,
      fullName: XMPIE_PLACEHOLDERS.FULL_NAME,
      email: XMPIE_PLACEHOLDERS.EMAIL,
      company: XMPIE_PLACEHOLDERS.COMPANY,
      title: '@@ADOR.Title@@',
    };
    
    return (
      <span 
        className={className} 
        data-xmpie-field={field}
        data-xmpie-ador={adorMap[field]}
      >
        {adorMap[field]}
      </span>
    );
  }

  // For web personalization, show actual data or placeholder
  const value = recipient[field] || DEFAULT_RECIPIENT[field] || `[${field}]`;
  
  return (
    <span 
      className={className}
      data-xmpie-field={field}
      data-xmpie-personalized={isPersonalized ? 'true' : 'false'}
    >
      {value}
    </span>
  );
};

export default XMPieVariable;
