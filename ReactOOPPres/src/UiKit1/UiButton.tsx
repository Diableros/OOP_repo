export interface Props {
  onClick: () => void;
  width?: string;
}

const UiButton = ({ onClick, width }: Props) => {
  const click = () => {
    alert("Старая кнопка нажата");
    onClick();
  };

  return (
    <button
      onClick={click}
      style={{ backgroundColor: "blue", borderRadius: "50%", width: width }}
    >
      Далее
    </button>
  );
};

export default UiButton;
