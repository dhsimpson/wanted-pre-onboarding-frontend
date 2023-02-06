import { IAccountProps } from 'interfaces/IAccountProps'

export default function InputPassword({
  handleChange,
  setAccountData
}: IAccountProps) {
  return (
    <input
      data-testid="password-input"
      name="password"
      type="password"
      onChange={(e) => handleChange(e, setAccountData)}
    />
  )
}
