interface ISubmitButtonProps {
  isValid: () => boolean
  testId: string
  name: string
}

export default function SubmitButton({
  isValid,
  testId,
  name
}: ISubmitButtonProps) {
  return (
    <button data-testid={testId} type="submit" disabled={!isValid()}>
      {name}
    </button>
  )
}
