import { useEffect } from "react";
import PropTypes from "prop-types";
import AsyncCreatableSelect from "react-select/async-creatable";

const CreatableSelectV2 = (props) => {
  const { options, changeOption, createOption, value, isFixed } = props;

  useEffect(() => {}, [options, value]);
  // console.log(options);

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
    if (!newValue.__isNew__) {
      changeOption(newValue);
    } else {
      console.log("create newValue", newValue);
      await createOption(newValue.label);
    }
  };

  return (
    <div>
      <AsyncCreatableSelect
        isDisabled={isFixed}
        cacheOptions
        defaultOptions={options}
        loadOptions={promiseOptions}
        onChange={handleChange}
        defaultValue={value}
        value={value}
      />
    </div>
  );
};

CreatableSelectV2.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.array.isRequired,
    changeOption: PropTypes.func.isRequired,
    createOption: PropTypes.func.isRequired,
    value: PropTypes.object,
    isFixed: PropTypes.bool,
  }),
};

export default CreatableSelectV2;
