import { leadingRelaxed, textBase } from './theme';

/* eslint-disable sort-imports */
import { MjmlText } from 'mjml-react';

type BulletedListProps = {
  items: string[];
};

const BulletedList: React.FC<BulletedListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <MjmlText
          padding="1px 0 0"
          fontSize={textBase}
          lineHeight={leadingRelaxed}
          cssClass="li"
          key={item}
        >
          •&nbsp;&nbsp;{item}
        </MjmlText>
      ))}
    </>
  );
};

export default BulletedList;
