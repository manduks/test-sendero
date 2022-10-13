import { Button } from './Button';
import classNames from 'classnames';

type BuyButtonProps = {
  buttonStyles: string;
  buttonLegend: string;
};

export const BuyButton = (props: BuyButtonProps) => {
  return (
    <form
      action="/api/orders/checkout"
      method="POST"
      className={classNames(props.buttonStyles)}
    >
      <Button type="submit" role="link" variant="blue">
        {props.buttonLegend}
      </Button>
    </form>
  );
};
