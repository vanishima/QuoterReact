import { useEffect } from "react";
import PropTypes from "prop-types";
import AsyncCreatableSelect from "react-select/async-creatable";

const CreatableSelectModel = (props) => {
  const { options, setValue, setOptions, createOption, defaultValue } = props;

  useEffect(() => {}, [options, defaultValue]);

  const filterOptions = (inputValue: string) => {
    if (options.length > 0) {
      return options.filter((i) =>
        i.value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return [];
  };

  const promiseOptions = (inputValue: string) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  const handleChange = async (newValue, actionMeta) => {
    console.log("handleChange", newValue);
    let newOption;
    if (!newValue.__isNew__) {
      console.log("options", options);
      console.log("already exists", newValue);
      newOption = newValue;
    } else {
      console.log("create newValue", newValue);
      newOption = await createOption(newValue.label);
      console.log("created newOption", newOption);
      setOptions([newOption, ...options]);
    }
    setValue(newOption);
  };

  return (
    <div>
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions={options}
        loadOptions={promiseOptions}
        onChange={handleChange}
        defaultValue={defaultValue}
        value={defaultValue}
      />
    </div>
  );
};

CreatableSelectModel.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.array.isRequired,
    setOptions: PropTypes.func,
    setValue: PropTypes.func.isRequired,
    createOption: PropTypes.func.isRequired,
    defaultValue: PropTypes.object,
  }),
};

export default CreatableSelectModel;
