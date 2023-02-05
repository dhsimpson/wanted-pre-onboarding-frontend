interface Props {
  handleChange: (
    event: React.FormEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => void
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

export default function InputPassword({ handleChange, setPassword }: Props) {
  return (
    <input
      data-testid="password-input"
      name="password"
      type="password"
      onChange={(e) => handleChange(e, setPassword)}
    />
  )
}
