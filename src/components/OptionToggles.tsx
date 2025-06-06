import React from 'react';

interface OptionTogglesProps {
  ownCar: boolean;
  onOwnCarChange: (value: boolean) => void;
  livingAlone: boolean;
  onLivingAloneChange: (value: boolean) => void;
}

const OptionToggles: React.FC<OptionTogglesProps> = ({ ownCar, onOwnCarChange, livingAlone, onLivingAloneChange }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16 }}>
      <input
        type="checkbox"
        checked={ownCar}
        onChange={e => onOwnCarChange(e.target.checked)}
        style={{ width: 20, height: 20, borderRadius: 6, accentColor: '#D72638', marginRight: 8 }}
      />
      Own a car?
    </label>
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 16 }}>
      <input
        type="checkbox"
        checked={livingAlone}
        onChange={e => onLivingAloneChange(e.target.checked)}
        style={{ width: 20, height: 20, borderRadius: 6, accentColor: '#D72638', marginRight: 8 }}
      />
      Living alone?
    </label>
  </div>
);

export default OptionToggles; 