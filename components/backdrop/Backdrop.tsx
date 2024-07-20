import "./backdrop.style.scss";

interface Props {
  onClick?: () => void;
}

const Backdrop = ({ onClick }: Props) => <div className="backdrop" onClick={() => onClick && onClick()} />;

export default Backdrop;
