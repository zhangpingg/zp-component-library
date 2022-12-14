import React, { FC, memo } from 'react';
import ZpNumber from '.';
import { ZpNumberProps } from '../interface';

type BusinessControlProps = ZpNumberProps & { businessType: string };

const BusinessControl: FC<BusinessControlProps> = (props) => {
  const { businessType, ...rest } = props;
  let config: ZpNumberProps = {};
  switch (businessType) {
    case 'Amount':
      config = { precision: 2, unit: 'δΈε' };
      break;
    case 'FullPrice':
      config = { intDigits: 15, precision: 4, unit: 'ε', autoFill: true };
      break;
  }
  return <ZpNumber {...config} {...rest} />;
};

export default memo(BusinessControl);
