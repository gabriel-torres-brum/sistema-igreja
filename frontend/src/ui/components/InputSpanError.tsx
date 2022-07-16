import validationErrors from "../../data/utils/validationErrors.json"

interface InputSpanErrorProps {
  type: string
  field: string
}

export function InputSpanError({ type, field }: InputSpanErrorProps) {
  return (
    <span className="text-red-500 label label-text">
      {validationErrors[field][type]}
    </span>
  )
}