import Autocomplete from "@/components/Autocomplete";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectBox from "@/components/SelectBox";
import TextField from "@/components/TextField";
import Typography from "@/components/Typography";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { test_autocomplete_item } from "src/data/test";

export const TEST_AREA = "w-1/4 space-y-2 border-blue-600 border p-2";
const exam_select = ["a", "b"];

const TestPage: NextPage = () => {
  const [autoCompleteInput, setAutoCompleteInput] = useState("");
  const [selectValue, setSelectValue] = useState<string | string[]>();
  const [selectMultiValue, setSelectMultiValue] = useState<string | string[]>();

  const updateAutoCompleteInput = (newValue: string) => {
    setAutoCompleteInput(newValue);
  };

  const changeSelectBox = (option: string | string[]) => {
    setSelectValue(option);
  };

  const changeMultiSelectBox = (option: string | string[]) => {
    setSelectMultiValue(option);
  };

  return (
    <main className="p-5 flex space-x-2">
      <div className={TEST_AREA}>
        <Typography fontSize={32} align="center" tailwindcss="w-full">
          Button UI
        </Typography>
        <Button fullWidth size="small">
          Small None
        </Button>
        <Button fullWidth size="small" theme="primary">
          Small Primary
        </Button>
        <Button fullWidth size="small" theme="cancel">
          Small Cancel
        </Button>
        <Button fullWidth size="medium">
          Medium None
        </Button>
        <Button fullWidth size="medium" theme="primary">
          Medium Primary
        </Button>
        <Button fullWidth size="medium" theme="cancel">
          Medium Cancel
        </Button>
        <Button fullWidth size="large">
          Large None
        </Button>
        <Button fullWidth size="large" theme="primary">
          Large Primary
        </Button>
        <Button fullWidth size="large" theme="cancel">
          Large Cancel
        </Button>
      </div>
      <div className={TEST_AREA}>
        <Typography fontSize={32} align="center" tailwindcss="w-full">
          Button With Icon
        </Typography>

        <Typography fontSize={32} align="center" tailwindcss="w-full">
          Typography UI
        </Typography>
        <Typography fontSize={12} align="center" tailwindcss="w-full">
          fontSize 12
        </Typography>
        <Typography fontSize={14} align="center" tailwindcss="w-full">
          fontSize 14
        </Typography>
        <Typography fontSize={16} align="center" tailwindcss="w-full">
          fontSize 16
        </Typography>
        <Typography fontSize={18} align="center" tailwindcss="w-full">
          fontSize 18
        </Typography>
        <Typography fontSize={32} align="center" tailwindcss="w-full">
          fontSize 32
        </Typography>

        <Typography align="justify" tailwindcss="w-full">
          justify
        </Typography>
        <Typography align="inherit" tailwindcss="w-full">
          inherit
        </Typography>
        <Typography align="left" tailwindcss="w-full">
          left
        </Typography>
        <Typography align="center" tailwindcss="w-full">
          center
        </Typography>
        <Typography align="right" tailwindcss="w-full">
          right
        </Typography>
        <Typography fontSize={32} align="center" tailwindcss="w-full">
          Input UI
        </Typography>
        <Input placeholder="ID" type="text" />
        <Input placeholder="PASSWORD" type="password" />
      </div>
      <div className={`${TEST_AREA} space-y-3`}>
        <Autocomplete
          options={test_autocomplete_item}
          inputValue={autoCompleteInput}
          updateInputValue={updateAutoCompleteInput}
        />
        <TextField label="Label" />
        <SelectBox
          label="Label"
          onChange={changeSelectBox}
          options={exam_select}
          value={selectValue}
        />
        <SelectBox
          label="Multiple"
          onChange={changeMultiSelectBox}
          options={exam_select}
          value={selectMultiValue}
          multiple
        />
      </div>
      <div className={`${TEST_AREA} space-y-2`}></div>
    </main>
  );
};

export default TestPage;
