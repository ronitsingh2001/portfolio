import React, { forwardRef, useState, useEffect, useRef } from "react";

const App = () => {
  const [args, setArgs] = useState([{ name: "newArg", value: "true" }]);
  const [operation, setOperation] = useState("null");
  const [result, setResult] = useState("undefined");

  return (
    <div className="p-5 flex flex-col gap-5">
      <ArgumentComponent args={args} setArgs={setArgs} />
      <OperationComponent
        args={args}
        setArgs={setArgs}
        operation={operation}
        setOperation={setOperation}
        result={result}
        setResult={setResult}
      />

      <div>Result : {result}</div>
    </div>
  );
};

const ArgumentComponent = ({ args, setArgs }) => {
  const inputChangeHandler = (event, index) => {
    args[index].name = event.target.value;
    setArgs([...args]);
  };

  const selectChangeHandler = (index) => {
    args[index].value === "true"
      ? (args[index].value = "false")
      : (args[index].value = "true");
    setArgs([...args]);
  };

  return (
    <div>
      {args.map((item, index) => (
        <div key={index} className="flex">
          <input
            type="text"
            value={item.name}
            onChange={(e) => inputChangeHandler(e, index)}
            className="border rounded-md border-slate-400 px-2 py-1"
          />
          <select
            value={item.value}
            onChange={() => selectChangeHandler(index)}
            className="border rounded-md border-slate-400 px-2 py-1"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      ))}
      <button
        className="border rounded-md border-slate-400 px-2 py-1 bg-gray-200"
        onClick={() => {
          setArgs([...args, { name: "newArg", value: "true" }]);
        }}
      >
        {" "}
        + add arg
      </button>
    </div>
  );
};

const OperationComponent = ({
  args,
  setArgs,
  operation,
  setOperation,
  result,
  setResult,
}) => {
  const constRef = useRef();
  const argRef = useRef();
  const [changed, setChanged] = useState(0);
  const [andOr, setAndOr] = useState("undefined");
  const resultHandler = () => {
    if (operation === " null") setResult("undefined");
    if (operation === "constant") setResult(constRef.current.value);
    if (operation === "argument") setResult(argRef.current.value);
    if (operation === "and" || operation === "or") setResult(andOr);
  };

  useEffect(() => {
    resultHandler();
  }, [changed, operation, args, andOr]);

  return (
    <div className="flex">
      {operation === "null" && (
        <NullOperation operation={operation} setOperation={setOperation} />
      )}
      {operation === "constant" && (
        <ConstantOperation ref={constRef} setChanged={setChanged} />
      )}
      {operation === "argument" && (
        <ArgOperation args={args} setChanged={setChanged} ref={argRef} />
      )}
      {(operation === "and" || operation === "or") && (
        <AndOrOperation
          operation={operation}
          setOperation={setOperation}
          result={result}
          args={args}
          setResult={setResult}
          andOr={andOr}
          setAndOr={setAndOr}
          changed={setChanged}
        />
      )}
      {operation !== "and" && operation !== "or" && operation !== "null" && (
        <button
          className="border ml-2 rounded-md border-slate-400 px-2 py-1 bg-gray-200"
          onClick={() => {
            setOperation("null");
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

const NullOperation = ({ operation, setOperation }) => {
  return (
    <select
      value={operation}
      onChange={(e) => setOperation(e.target.value)}
      className="border rounded-md border-slate-400 px-2 py-1"
    >
      <option value="null">Select</option>
      <option value="constant">constant</option>
      <option value="argument">argument</option>
      <option value="and">and</option>
      <option value="or">or</option>
    </select>
  );
};

const ConstantOperation = forwardRef(({ setChanged }, ref) => {
  return (
    <div>
      <select
        ref={ref}
        onChange={() => setChanged((prev) => prev + 1)}
        className="border rounded-md border-slate-400 px-2 py-1"
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
  );
});

const ArgOperation = forwardRef(({ args, setChanged }, ref) => {
  return (
    <select
      className="border rounded-md border-slate-400 px-2 py-1"
      ref={ref}
      onChange={() => setChanged((prev) => prev + 1)}
    >
      {args.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
});

const AndOrOperation = ({
  operation,
  setOperation,
  setResult,
  result,
  args,
  andOr,
  setAndOr,
  changed,
}) => {
  const [operation1, setOperation1] = useState("null");
  const [operation2, setOperation2] = useState("null");
  const [operation3, setOperation3] = useState("null");
  const [result1, setResult1] = useState("undefined");
  const [result2, setResult2] = useState("undefined");
  const [result3, setResult3] = useState("undefined");
  const [extraOption, setExtraOption] = useState(false);

  const operationHandler = () => {
    if (operation === "and") setOperation("or");
    else if (operation === "or") setOperation("and");
  };

  useEffect(() => {
    if (result1 === "undefined" && result2 === "undefined") {
      setAndOr("undefined");
      return;
    }
    if (!extraOption) {
      if (operation === "and") {
        if (result1 === "true" && result2 == "true") {
          setAndOr("true");
        } else {
          setAndOr("false");
        }
      } else if (operation === "or") {
        if (result1 === "false" && result2 == "false") {
          setAndOr("false");
        } else {
          setAndOr("true");
        }
      }
    }
  }, [result1, result2, changed, args, andOr, result3, operation, result]);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between">
        <select
          className="rounded-md border-slate-400 px-2 py-1 bg-gray-200"
          defaultValue={operation === "or" ? "or" : "and"}
          onChange={() => operationHandler()}
        >
          <option value="and">And</option>
          <option value="or">Or</option>
        </select>
        <button
          className="border ml-2 rounded-md border-slate-400 px-2 py-1 bg-gray-200"
          onClick={() => {
            setOperation("null");
            setResult("undefined");
          }}
        >
          X
        </button>
      </div>

      <div className="pl-2 flex flex-col">
        <OperationComponent
          args={args}
          operation={operation1}
          setOperation={setOperation1}
          result={result}
          setResult={setResult1}
        />
        <OperationComponent
          args={args}
          operation={operation2}
          setOperation={setOperation2}
          result={result}
          setResult={setResult2}
        />

        {extraOption ? (
          <OperationComponent
            args={args}
            operation={operation3}
            setOperation={setOperation3}
            result={result}
            setResult={setResult3}
          />
        ) : (
          <button
            className="border ml-2 rounded-md border-slate-400 px-2 py-1 bg-gray-200"
            onClick={() => {
              setExtraOption(true);
            }}
          >
            + add arg
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
