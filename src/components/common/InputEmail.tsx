import { IAccountProps } from 'interfaces/IAccountProps'

export default function InputEmail({
  handleChange,
  setAccountData
}: IAccountProps) {
  return (
    <input
      data-testid="email-input"
      name="email"
      onChange={(e) => handleChange(e, setAccountData)}
    />
  )
}
