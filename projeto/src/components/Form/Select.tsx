import { ForwardRefRenderFunction, forwardRef } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectProps,
} from "@mui/material";

import { IBrandsModelsAndYear } from "@/@types";

interface ISelectInput extends SelectProps {
  label: string;
  error?: boolean;
  id: string;
  options: Array<IBrandsModelsAndYear> | undefined;
}

const SelectInputBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  ISelectInput
> = ({ error = false, label, id, options, onChange, ...rest }, ref) => {
  return (
    <FormControl
      fullWidth
      error={error}
      disabled={!options?.length}
      sx={{ my: 1 }}
    >
      <InputLabel id={"label-" + id}>{label}</InputLabel>
      <Select
        labelId={"label-" + id}
        id={id}
        label={label}
        ref={ref}
        {...rest}
        onChange={onChange}
      >
        {options?.map((item) => (
          <MenuItem key={item.codigo} value={item.codigo}>
            {item.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectInput = forwardRef(SelectInputBase);
