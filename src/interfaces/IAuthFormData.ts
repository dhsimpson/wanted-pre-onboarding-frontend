export default interface IAuthFormData extends EventTarget {
  email: { value: string }
  password: { value: string }
}
