export interface Input {
  temperature: string;
  time: string;
}

export interface IInputComponent {
  modelValue: string
  placeholder: string
  label?: string
  margin_top?: boolean
  type?: string
}