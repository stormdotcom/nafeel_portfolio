import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  subTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-6 ${props.align === "left" ? "" : "items-center justify-center text-center"
        }`}>
      {props.title && (
        <div className="xs:text-sm text-4xl font-bold tracking-wider text-indigo-600 uppercase">
          {props.title}
        </div>
      )}

      {props.subTitle && (
        <h2 className="py-4 text-lg xs:text-sm leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.subTitle}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

