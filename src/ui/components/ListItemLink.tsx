import { FC, ForwardedRef, forwardRef, ReactNode, useMemo } from 'react';

import { Avatar, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  icon?: ReactNode;
  avatar?: ReactNode;
  secondaryAction?: ReactNode;
  text: string;
  text2?: string;
  to: string;
}

export const ListItemLink: FC<Props> = ({ icon, avatar, text2, secondaryAction, text, to }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref: ForwardedRef<HTMLAnchorElement | null>) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <>
      <ListItem button component={renderLink} secondaryAction={secondaryAction}>
        {avatar ? (
          <ListItemAvatar>
            <Avatar>{avatar}</Avatar>
          </ListItemAvatar>
        ) : null}
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={text} secondary={text2} />
      </ListItem>
    </>
  );
};
