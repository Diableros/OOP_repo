export interface Props {
  onClick: () => void;
  width?: string;
}

const UiButton = ({ onClick, width }: Props) => {
  const click = () => {
    alert("Новая кнопка нажата");
    onClick();
  };

  return (
    <button onClick={click} style={{ backgroundColor: "grey", width }}>
      Далее 2
    </button>
  );
};

export default UiButton;
