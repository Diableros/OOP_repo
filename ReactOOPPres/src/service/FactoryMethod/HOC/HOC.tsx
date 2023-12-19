import * as React from "react";
import { JSX } from "react/jsx-runtime";

import IntrinsicAttributes = JSX.IntrinsicAttributes;
import LibraryManagedAttributes = JSX.LibraryManagedAttributes;

type ExtendProps = { [key in string]: unknown };

export function classHOC<
  PropsType extends ExtendProps = ExtendProps,
  T extends (props: PropsType) => React.ReactNode = (
    props: PropsType,
  ) => React.ReactNode,
>(
  propsFromHOC: Partial<PropsType>,
  ComponentSend: T,
): (props: PropsType) => React.ReactNode {
  return (props) => {
    const sumProps = Object.fromEntries(
      Object.entries(props).map(([key, value]) => {
        const callback = (value: unknown): unknown => {
          if (typeof value === "function") {
            return (...arg: unknown[]) => {
              const valueFromHOC = propsFromHOC[key as keyof PropsType];

              if (typeof valueFromHOC === "function") {
                valueFromHOC(...arg);
              }

              value(...arg);
            };
          }
          return value;
        };

        return [key, callback(value)];
      }),
    ) as IntrinsicAttributes & LibraryManagedAttributes<T, PropsType>;
    return <ComponentSend {...sumProps} />;
  };
}
