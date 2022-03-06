import { FC } from 'react';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { SvgIconProps } from '@mui/material/SvgIcon/SvgIcon';

import { OnlineStatus } from '@interfaces/OnlineStatus';
import { Nullable } from '@utils/fp';

interface Props extends SvgIconProps {
  status: Nullable<OnlineStatus>;
}

export const StatusIcon: FC<Props> = ({ status, ...props }) => {
  const getIcon = () => {
    if (!status) {
      return QuestionMarkIcon;
    }

    return status === OnlineStatus.Online ? RadioButtonCheckedIcon : RadioButtonUncheckedIcon;
  };
  const Icon = getIcon();
  const color = status === OnlineStatus.Online ? 'secondary' : undefined;

  return <Icon color={color} {...props} />;
};
