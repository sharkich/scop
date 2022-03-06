import { FC } from 'react';

import { Queen } from '@interfaces/Queen';

import { ListItemLink } from '../../../components/ListItemLink';
import { StatusIcon } from '../../../components/StatusIcon';

interface Props {
  queen: Queen;
}

export const QueenItem: FC<Props> = ({ queen }) => {
  return (
    <ListItemLink
      icon={<StatusIcon status={queen.status} />}
      text={queen.host}
      text2={queen.createdBy}
      to={`/queens/${queen.id}`}
    />
  );
};
