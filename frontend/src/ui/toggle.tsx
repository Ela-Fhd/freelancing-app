import { Field, Label, Switch } from "@headlessui/react";

export default function Toggle({ enabled, handleChange, label }) {
  return (
    <Field className="flex items-center">
      <Label className="ml-2">{label}</Label>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${
          enabled ? "bg-primary-900" : "bg-secondary-200"
        } group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? "-translate-x-6" : "-translate-x-1"
          } size-4 rounded-full bg-white transition`}
        />
      </Switch>
    </Field>
  );
}
