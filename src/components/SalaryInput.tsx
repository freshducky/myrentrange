import React from 'react';

type SalaryType = 'hourly' | 'monthly' | 'annual';

interface SalaryInputProps {
  value: number;
  onChange: (value: number) => void;
  type: SalaryType;
  onTypeChange: (type: SalaryType) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({ value, onChange, type, onTypeChange }) => {
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <button
          type="button"
          aria-pressed={type === 'hourly'}
          className={type === 'hourly' ? 'active' : ''}
          onClick={() => onTypeChange('hourly')}
        >Hourly</button>
        <button
          type="button"
          aria-pressed={type === 'monthly'}
          className={type === 'monthly' ? 'active' : ''}
          onClick={() => onTypeChange('monthly')}
        >Monthly</button>
        <button
          type="button"
          aria-pressed={type === 'annual'}
          className={type === 'annual' ? 'active' : ''}
          onClick={() => onTypeChange('annual')}
        >Annual</button>
      </div>
      <input
        type="number"
        min={0}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        placeholder={`Enter ${type} gross salary`}
        style={{ width: '100%', padding: 12, fontSize: 16, borderRadius: 12, border: '1px solid #e0e0e0', boxShadow: '0 1px 4px rgba(63, 136, 197, 0.06)' }}
      />
    </div>
  );
};

export default SalaryInput; 