import { IconWrapper } from '../../components/atoms';

const Delete = () => (
  <svg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M11.5 2.52H9.5V1.12C9.5 0.50225 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.50225 2.5 1.12V2.52H0.5C0.223437 2.52 0 2.77025 0 3.08V3.64C0 3.717 0.05625 3.78 0.125 3.78H1.06875L1.45469 12.9325C1.47969 13.5293 1.92031 14 2.45312 14H9.54688C10.0813 14 10.5203 13.531 10.5453 12.9325L10.9312 3.78H11.875C11.9438 3.78 12 3.717 12 3.64V3.08C12 2.77025 11.7766 2.52 11.5 2.52ZM8.375 2.52H3.625V1.26H8.375V2.52Z' />
  </svg>
);

const DeleteIcon = props => <IconWrapper component={Delete} {...props} />;

export default DeleteIcon;
