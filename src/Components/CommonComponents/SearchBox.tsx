import { useEffect, useState } from "react";
import Utility from "../../DocumentHelpers/Utility";

export interface searchBoxProps {
  width: number;
  height: number;
  label?: String;
  placeHolder: String;
}

function SearchBox(props: searchBoxProps) {
  const [inputBoxData, setInputBoxData] = useState<searchBoxProps>(props);

  return (
    <>
      {!Utility.isItEmpty(inputBoxData.label) && (
        <label htmlFor="searchBox">{inputBoxData?.label ?? ""}</label>
      )}
      <input
        style={{
          height: inputBoxData.height,
          width: inputBoxData.width,
        }}
        type="text"
        placeholder={`${inputBoxData?.placeHolder ?? ""}`}
      />
    </>
  );
}

export default SearchBox;
