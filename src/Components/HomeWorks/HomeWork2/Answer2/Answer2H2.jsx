import React, { useState } from "react";
import Card from "../../../../UI/Elements/Card";
import CustomInput from "../../../../UI/Elements/CustomInput";

function convertNumber(number, base) {
  const digits = "0123456789ABCDEF";
  let remainder,
    converted = "";
  while (number > 0) {
    remainder = number % base;
    converted = digits[remainder] + converted;
    number = Math.floor(number / base);
  }
  return converted;
}

function convertInputs(inputs, sourceBase, targetBase) {
  return inputs.map((input) => {
    const number = parseInt(input, sourceBase);
    return convertNumber(number, targetBase);
  });
}

const Answer2H2 = (props) => {
  const [inputs, setInputs] = useState(Array(1).fill(""));
  const outputBases = Array.from({ length: 15 }, (_, i) => i + 2);
  const [result, setResult] = useState([]);
  const [baseInput2, setBaseInput2] = useState("");
  const [baseInput3, setBaseInput3] = useState("");
  const [baseInput4, setBaseInput4] = useState("");
  const [baseInput5, setBaseInput5] = useState("");
  const [baseInput6, setBaseInput6] = useState("");
  const [baseInput7, setBaseInput7] = useState("");
  const [baseInput8, setBaseInput8] = useState("");
  const [baseInput9, setBaseInput9] = useState("");
  const [baseInput10, setBaseInput10] = useState("");
  const [baseInput11, setBaseInput11] = useState("");
  const [baseInput12, setBaseInput12] = useState("");
  const [baseInput13, setBaseInput13] = useState("");
  const [baseInput14, setBaseInput14] = useState("");
  const [baseInput15, setBaseInput15] = useState("");
  const [baseInput16, setBaseInput16] = useState("");
  const [baseInput2ReadOnly, setBaseInput2ReadOnly] = useState(false);
  const [baseInput3ReadOnly, setBaseInput3ReadOnly] = useState(false);
  const [baseInput4ReadOnly, setBaseInput4ReadOnly] = useState(false);
  const [baseInput5ReadOnly, setBaseInput5ReadOnly] = useState(false);
  const [baseInput6ReadOnly, setBaseInput6ReadOnly] = useState(false);
  const [baseInput7ReadOnly, setBaseInput7ReadOnly] = useState(false);
  const [baseInput8ReadOnly, setBaseInput8ReadOnly] = useState(false);
  const [baseInput9ReadOnly, setBaseInput9ReadOnly] = useState(false);
  const [baseInput10ReadOnly, setBaseInput10ReadOnly] = useState(false);
  const [baseInput11ReadOnly, setBaseInput11ReadOnly] = useState(false);
  const [baseInput12ReadOnly, setBaseInput12ReadOnly] = useState(false);
  const [baseInput13ReadOnly, setBaseInput13ReadOnly] = useState(false);
  const [baseInput14ReadOnly, setBaseInput14ReadOnly] = useState(false);
  const [baseInput15ReadOnly, setBaseInput15ReadOnly] = useState(false);
  const [baseInput16ReadOnly, setBaseInput16ReadOnly] = useState(false);
  const [baseInput2Error, setBaseInput2Error] = useState(false);
  const [baseInput3Error, setBaseInput3Error] = useState(false);
  const [baseInput4Error, setBaseInput4Error] = useState(false);
  const [baseInput5Error, setBaseInput5Error] = useState(false);
  const [baseInput6Error, setBaseInput6Error] = useState(false);
  const [baseInput7Error, setBaseInput7Error] = useState(false);
  const [baseInput8Error, setBaseInput8Error] = useState(false);
  const [baseInput9Error, setBaseInput9Error] = useState(false);
  const [baseInput10Error, setBaseInput10Error] = useState(false);
  const [baseInput11Error, setBaseInput11Error] = useState(false);
  const [baseInput12Error, setBaseInput12Error] = useState(false);
  const [baseInput13Error, setBaseInput13Error] = useState(false);
  const [baseInput14Error, setBaseInput14Error] = useState(false);
  const [baseInput15Error, setBaseInput15Error] = useState(false);
  const [baseInput16Error, setBaseInput16Error] = useState(false);

  function handleInputChange(eventIndex, value) {
    if (eventIndex === 2) {
      const isValid = /^[01]+$/.test(value);
      if (isValid) {
        setBaseInput2Error(false);
        setBaseInput2(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 2] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2(item.value);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput2Error(true);
      }
    }
    if (eventIndex === 3) {
      const isValid = /^[0-2]+$/.test(value);
      if (isValid) {
        setBaseInput3Error(false);
        setBaseInput3(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 3] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3(item.value);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput3Error(true);
      }
    }
    if (eventIndex === 4) {
      const isValid = /^[0-3]+$/.test(value);
      if (isValid) {
        setBaseInput4Error(false);
        setBaseInput4(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 4] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4(item.value);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput4Error(true);
      }
    }
    if (eventIndex === 5) {
      const isValid = /^[0-4]+$/.test(value);
      if (isValid) {
        setBaseInput5Error(false);
        setBaseInput5(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 5] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5(item.value);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput5Error(true);
      }
    }
    if (eventIndex === 6) {
      const isValid = /^[0-5]+$/.test(value);
      if (isValid) {
        setBaseInput6Error(false);
        setBaseInput6(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 6] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6(item.value);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput6Error(true);
      }
    }
    if (eventIndex === 7) {
      const isValid = /^[0-6]+$/.test(value);
      if (isValid) {
        setBaseInput7Error(false);
        setBaseInput7(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 7] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7(item.value);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput7Error(true);
      }
    }
    if (eventIndex === 8) {
      const isValid = /^[0-7]+$/.test(value);
      if (isValid) {
        setBaseInput8Error(false);
        setBaseInput8(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 8] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8(item.value);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput8Error(true);
      }
    }
    if (eventIndex === 9) {
      const isValid = /^[0-8]+$/.test(value);
      if (isValid) {
        setBaseInput9Error(false);
        setBaseInput9(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 9] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9(item.value);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput9Error(true);
      }
    }
    if (eventIndex === 10) {
      const isValid = /^[0-9]+$/.test(value);
      if (isValid) {
        setBaseInput10Error(false);
        setBaseInput10(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 10] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10(item.value);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput10Error(true);
      }
    }
    if (eventIndex === 11) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A]+$/.test(inputValue);
      if (isValid) {
        setBaseInput11Error(false);
        setBaseInput11(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 11] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11(item.value);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput11Error(true);
      }
    }
    if (eventIndex === 12) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A-B]+$/.test(inputValue);
      if (isValid) {
        setBaseInput12Error(false);
        setBaseInput12(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 12] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12(item.value);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput12Error(true);
      }
    }
    if (eventIndex === 13) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A-C]+$/.test(inputValue);
      if (isValid) {
        setBaseInput13Error(false);
        setBaseInput13(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 13] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13(item.value);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput13Error(true);
      }
    }
    if (eventIndex === 14) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A-D]+$/.test(inputValue);
      if (isValid) {
        setBaseInput14Error(false);
        setBaseInput14(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 14] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14(item.value);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput14Error(true);
      }
    }
    if (eventIndex === 15) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A-E]+$/.test(inputValue);
      if (isValid) {
        setBaseInput15Error(false);
        setBaseInput15(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 15] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15(item.value);
          } else if (item.id === 29) {
            setBaseInput16ReadOnly(false);
            setBaseInput16(item.value);
            setBaseInput16ReadOnly(true);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput15Error(true);
      }
    }
    if (eventIndex === 16) {
      const inputValue = value.toUpperCase();
      const isValid = /^[0-9A-F]+$/.test(inputValue);
      if (isValid) {
        setBaseInput16Error(false);
        setBaseInput16(value);
        const newInputs = [...inputs];
        newInputs[eventIndex - 16] = value;
        setInputs(newInputs);
        setResult([]);
        let index = 0;
        outputBases.map((base) =>
          convertInputs(inputs, eventIndex, base).map((output) => {
            setResult((prevArray) => [
              ...prevArray,
              { id: index++, value: output },
            ]);
          })
        );
        result.map((item) => {
          if (item.id === 15) {
            setBaseInput2ReadOnly(false);
            setBaseInput2(item.value);
            setBaseInput2ReadOnly(true);
          } else if (item.id === 16) {
            setBaseInput3ReadOnly(false);
            setBaseInput3(item.value);
            setBaseInput3ReadOnly(true);
          } else if (item.id === 17) {
            setBaseInput4ReadOnly(false);
            setBaseInput4(item.value);
            setBaseInput4ReadOnly(true);
          } else if (item.id === 18) {
            setBaseInput5ReadOnly(false);
            setBaseInput5(item.value);
            setBaseInput5ReadOnly(true);
          } else if (item.id === 19) {
            setBaseInput6ReadOnly(false);
            setBaseInput6(item.value);
            setBaseInput6ReadOnly(true);
          } else if (item.id === 20) {
            setBaseInput7ReadOnly(false);
            setBaseInput7(item.value);
            setBaseInput7ReadOnly(true);
          } else if (item.id === 21) {
            setBaseInput8ReadOnly(false);
            setBaseInput8(item.value);
            setBaseInput8ReadOnly(true);
          } else if (item.id === 22) {
            setBaseInput9ReadOnly(false);
            setBaseInput9(item.value);
            setBaseInput9ReadOnly(true);
          } else if (item.id === 23) {
            setBaseInput10ReadOnly(false);
            setBaseInput10(item.value);
            setBaseInput10ReadOnly(true);
          } else if (item.id === 24) {
            setBaseInput11ReadOnly(false);
            setBaseInput11(item.value);
            setBaseInput11ReadOnly(true);
          } else if (item.id === 25) {
            setBaseInput12ReadOnly(false);
            setBaseInput12(item.value);
            setBaseInput12ReadOnly(true);
          } else if (item.id === 26) {
            setBaseInput13ReadOnly(false);
            setBaseInput13(item.value);
            setBaseInput13ReadOnly(true);
          } else if (item.id === 27) {
            setBaseInput14ReadOnly(false);
            setBaseInput14(item.value);
            setBaseInput14ReadOnly(true);
          } else if (item.id === 28) {
            setBaseInput15ReadOnly(false);
            setBaseInput15(item.value);
            setBaseInput15ReadOnly(true);
          } else if (item.id === 29) {
            setBaseInput16(item.value);
          }
        });
        if (value === "" || value === " " || value === null) {
          setBaseInput2ReadOnly(false);
          setBaseInput3ReadOnly(false);
          setBaseInput4ReadOnly(false);
          setBaseInput5ReadOnly(false);
          setBaseInput6ReadOnly(false);
          setBaseInput7ReadOnly(false);
          setBaseInput8ReadOnly(false);
          setBaseInput9ReadOnly(false);
          setBaseInput10ReadOnly(false);
          setBaseInput11ReadOnly(false);
          setBaseInput12ReadOnly(false);
          setBaseInput13ReadOnly(false);
          setBaseInput14ReadOnly(false);
          setBaseInput15ReadOnly(false);
          setBaseInput16ReadOnly(false);
        }
      } else {
        setBaseInput16Error(true);
      }
    }
  }

  return (
    <Card isDefault={true}>
      <CustomInput
        error={baseInput2Error}
        errorMessage={"لطفا اعداد بین 0 و 1 وارد کنید"}
        readOnly={baseInput2ReadOnly}
        placeholder={
          baseInput2 === "" || (baseInput2 === "0" && !baseInput2ReadOnly)
            ? "عدد در مبنای 2 را وارد کنید"
            : ""
        }
        id={"base2"}
        value={baseInput2}
        label={"  مبنا    2"}
        onChange={(event) => handleInputChange(2, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput3Error}
        errorMessage={"لطفا اعداد بین 0 و 2 وارد کنید"}
        readOnly={baseInput3ReadOnly}
        placeholder={
          baseInput3 === "" || (baseInput3 === "0" && !baseInput3ReadOnly)
            ? "عدد در مبنای 3 را وارد کنید"
            : ""
        }
        id={"base3"}
        value={baseInput3}
        label={"  مبنا     3"}
        onChange={(event) => handleInputChange(3, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput4Error}
        errorMessage={"لطفا اعداد بین 0 و 3 وارد کنید"}
        readOnly={baseInput4ReadOnly}
        placeholder={
          baseInput4 === "" || (baseInput4 === "0" && !baseInput4ReadOnly)
            ? "عدد در مبنای 4 را وارد کنید"
            : ""
        }
        id={"base4"}
        value={baseInput4}
        label={"  مبنا     4"}
        onChange={(event) => handleInputChange(4, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput5Error}
        errorMessage={"لطفا اعداد بین 0 و 4 وارد کنید"}
        readOnly={baseInput5ReadOnly}
        placeholder={
          baseInput5 === "" || (baseInput5 === "0" && !baseInput5ReadOnly)
            ? "عدد در مبنای 5 را وارد کنید"
            : ""
        }
        id={"base5"}
        value={baseInput5}
        label={"  مبنا     5"}
        onChange={(event) => handleInputChange(5, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput6Error}
        errorMessage={"لطفا اعداد بین 0 و 4 وارد کنید"}
        readOnly={baseInput6ReadOnly}
        placeholder={
          baseInput6 === "" || (baseInput6 === "0" && !baseInput6ReadOnly)
            ? "عدد در مبنای 6 را وارد کنید"
            : ""
        }
        id={"base6"}
        value={baseInput6}
        label={"  مبنا     6"}
        onChange={(event) => handleInputChange(6, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput7Error}
        errorMessage={"لطفا اعداد بین 0 و 6 وارد کنید"}
        readOnly={baseInput7ReadOnly}
        placeholder={
          baseInput7 === "" || (baseInput7 === "0" && !baseInput7ReadOnly)
            ? "عدد در مبنای 7 را وارد کنید"
            : ""
        }
        id={"base7"}
        value={baseInput7}
        label={"  مبنا     7"}
        onChange={(event) => handleInputChange(7, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput8Error}
        errorMessage={"لطفا اعداد بین 0 و 7 وارد کنید"}
        readOnly={baseInput8ReadOnly}
        placeholder={
          baseInput8 === "" || (baseInput8 === "0" && !baseInput8ReadOnly)
            ? "عدد در مبنای 8 را وارد کنید"
            : ""
        }
        id={"base8"}
        value={baseInput8}
        label={"  مبنا     8"}
        onChange={(event) => handleInputChange(8, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput9Error}
        errorMessage={"لطفا اعداد بین 0 و 8 وارد کنید"}
        readOnly={baseInput9ReadOnly}
        placeholder={
          baseInput9 === "" || (baseInput9 === "0" && !baseInput9ReadOnly)
            ? "عدد در مبنای 9 را وارد کنید"
            : ""
        }
        id={"base9"}
        value={baseInput9}
        label={"  مبنا     9"}
        onChange={(event) => handleInputChange(9, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput10Error}
        errorMessage={"لطفا اعداد بین 0 و 9 وارد کنید"}
        readOnly={baseInput10ReadOnly}
        placeholder={
          baseInput10 === "" || (baseInput10 === "0" && !baseInput10ReadOnly)
            ? "عدد در مبنای 10 را وارد کنید"
            : ""
        }
        id={"base10"}
        value={baseInput10}
        label={"  مبنا     10"}
        onChange={(event) => handleInputChange(10, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput11Error}
        errorMessage={"لطفا کارکتر مناسب انتخاب کنید(1...9,A)"}
        readOnly={baseInput11ReadOnly}
        placeholder={
          baseInput11 === "" || (baseInput11 === "0" && !baseInput11ReadOnly)
            ? "عدد در مبنای 11 را وارد کنید"
            : ""
        }
        id={"base11"}
        value={baseInput11}
        label={"  مبنا     11"}
        onChange={(event) => handleInputChange(11, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput12Error}
        errorMessage={"لطفا کارکتر مناسب انتخاب کنید(1...9,AB)"}
        readOnly={baseInput12ReadOnly}
        placeholder={
          baseInput12 === "" || (baseInput12 === "0" && !baseInput12ReadOnly)
            ? "عدد در مبنای 12 را وارد کنید"
            : ""
        }
        id={"base12"}
        value={baseInput12}
        label={"  مبنا     12"}
        onChange={(event) => handleInputChange(12, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput13Error}
        errorMessage={"لطفا کارکتر مناسب انتخاب کنید(1...9,ABC)"}
        readOnly={baseInput13ReadOnly}
        placeholder={
          baseInput13 === "" || (baseInput13 === "0" && !baseInput13ReadOnly)
            ? "عدد در مبنای 13 را وارد کنید"
            : ""
        }
        id={"base13"}
        value={baseInput13}
        label={"  مبنا     13"}
        onChange={(event) => handleInputChange(13, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput14Error}
        errorMessage={"لطفا کارکتر مناسب انتخاب کنید(1...9,ABCD)"}
        readOnly={baseInput14ReadOnly}
        placeholder={
          baseInput14 === "" || (baseInput14 === "0" && !baseInput14ReadOnly)
            ? "عدد در مبنای 14 را وارد کنید"
            : ""
        }
        id={"base14"}
        value={baseInput14}
        label={"  مبنا     14"}
        onChange={(event) => handleInputChange(14, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput15Error}
        errorMessage={"لطفا کارکتر مناسب انتخاب کنید(1...9,ABCDE)"}
        readOnly={baseInput15ReadOnly}
        placeholder={
          (baseInput15 === "" || baseInput15 === "0") && !baseInput15ReadOnly
            ? "عدد در مبنای 15 را وارد کنید"
            : ""
        }
        id={"base15"}
        value={baseInput15}
        label={"  مبنا     15"}
        onChange={(event) => handleInputChange(15, event.target.value)}
        type={"text"}
      />
      <CustomInput
        error={baseInput16Error}
        errorMessage={'"لطفا کارکتر مناسب انتخاب کنید(1...9,ABCDEF)'}
        readOnly={baseInput16ReadOnly}
        placeholder={
          baseInput16 === "" || (baseInput16 === "0" && baseInput16ReadOnly)
            ? "عدد در مبنای 16 را وارد کنید"
            : ""
        }
        id={"base16"}
        value={baseInput16}
        label={"  مبنای     16"}
        onChange={(event) => handleInputChange(16, event.target.value)}
        type={"text"}
      />
    </Card>
  );
};
export default Answer2H2;
