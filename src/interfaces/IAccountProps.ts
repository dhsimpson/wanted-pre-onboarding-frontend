export interface IAccountProps {
  handleChange: (
    event: React.FormEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => void
  setAccountData: React.Dispatch<React.SetStateAction<string>>
}
