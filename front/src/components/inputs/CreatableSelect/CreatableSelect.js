import { useEffect } from "react";
import PropTypes from "prop-types";
import AsyncCreatableSelect from "react-select/async-creatable";

const CreatableSelect = props => {
  const {
    className,
    options,
    changeOption,
    createOption,
    value,
    isDisabled,
    isClearable,
    isLoading,
    isMulti,
  } = props;

  useEffect(() => {}, [options, value]);

  const filterOptions = inputValue => {
    if (options.length > 0) {
      return options.filter(i =>
        i.value.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return [];
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  const handleChange = async (newValue, actionMeta) => {
    // console.log("handleChange", newValue);
    if (!newValue.__isNew__) {
      changeOption(newValue);
    } else {
      // console.log("create newValue", newValue);
      await createOption(newValue.label);
    }
  };

  return (
    <AsyncCreatableSelect
      className={className}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isLoading={isLoading}
      isMulti={isMulti}
      cacheOptions
      defaultOptions={options}
      loadOptions={promiseOptions}
      onChange={handleChange}
      defaultValue={value}
      value={value}
    />
  );
};

CreatableSelect.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.array.isRequired,
    changeOption: PropTypes.func.isRequired,
    createOption: PropTypes.func.isRequired,
    value: PropTypes.object,
    isFixed: PropTypes.bool,
    isClearable: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
  }),
};

export default CreatableSelect;
