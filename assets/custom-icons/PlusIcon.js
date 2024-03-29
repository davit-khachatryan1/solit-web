import { IconWrapper } from '../../components/atoms';

const Plus = () => (
  <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13.2999 6.29998H7.70002V0.699955C7.70002 0.31364 7.38638 0 6.99994 0C6.61362 0 6.29998 0.31364 6.29998 0.699955V6.29998H0.699955C0.31364 6.29998 0 6.61362 0 6.99994C0 7.38638 0.31364 7.70002 0.699955 7.70002H6.29998V13.2999C6.29998 13.6864 6.61362 14 6.99994 14C7.38638 14 7.70002 13.6864 7.70002 13.2999V7.70002H13.2999C13.6864 7.70002 14 7.38638 14 6.99994C14 6.61362 13.6864 6.29998 13.2999 6.29998Z'
      fill='white'
    />
  </svg>
);

const PlusIcon = props => <IconWrapper component={Plus} {...props} />;

export default PlusIcon;
