interface Props {
  alertText: string;
  alertType: string;
}

export default function Alert({ alertText, alertType }: Props) {
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
}
