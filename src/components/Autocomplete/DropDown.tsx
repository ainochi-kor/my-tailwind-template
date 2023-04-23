import { MouseEvent } from "react";

interface P {
  open: boolean;
  options: string[];
  handleComboBox: (selectedItem: string, e: MouseEvent) => void;
}

const DropDown: React.FC<P> = ({ open, options, handleComboBox }) => {
  return (
    <div className={`${open ? "block" : "hidden"}`}>
      {options.map((option, index) => {
        return (
          <li
            key={`${index}_${option}`}
            onClick={(e) => handleComboBox(option, e)}
          >
            {option}
          </li>
        );
      })}
    </div>
  );
};

export default DropDown;
