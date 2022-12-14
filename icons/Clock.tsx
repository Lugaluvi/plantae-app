import React from "react";

type Props = {
  color?: "green" | "red";
};

enum Color {
  green = "#3D7738",
  red = "#773838",
}

export const ClockIcon = ({ color = "green" }: Props) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2981 20.7692C7.43269 20.7692 5 19.7548 3 17.726C1 15.6971 0 13.2404 0 10.3558H1.73077C1.73077 12.7596 2.55769 14.8077 4.21154 16.5C5.86538 18.1923 7.89423 19.0385 10.2981 19.0385C12.7404 19.0385 14.8077 18.1827 16.5 16.4712C18.1923 14.7596 19.0385 12.6827 19.0385 10.2404C19.0385 7.85577 18.1827 5.84135 16.4712 4.19711C14.7596 2.55288 12.7019 1.73077 10.2981 1.73077C8.99039 1.73077 7.76442 2.02885 6.62019 2.625C5.47596 3.22115 4.48077 4.00961 3.63462 4.99038H6.66346V6.72115H0.634615V0.721154H2.36538V3.77885C3.36538 2.60577 4.55288 1.68269 5.92788 1.00962C7.30288 0.336538 8.75962 0 10.2981 0C11.7404 0 13.0962 0.269231 14.3654 0.807692C15.6346 1.34615 16.7452 2.08173 17.6971 3.01442C18.649 3.94712 19.399 5.03846 19.9471 6.28846C20.4952 7.53846 20.7692 8.88461 20.7692 10.3269C20.7692 11.7692 20.4952 13.125 19.9471 14.3942C19.399 15.6635 18.649 16.7692 17.6971 17.7115C16.7452 18.6538 15.6346 19.399 14.3654 19.9471C13.0962 20.4952 11.7404 20.7692 10.2981 20.7692ZM13.9904 15.0865L9.54808 10.7019V4.52885H11.2788V9.98077L15.2308 13.8462L13.9904 15.0865Z"
      fill={Color[color]}
    />
  </svg>
);
