// import { UserPasswordApiPayload } from '@/types/user'

export const validatePassword = (password: string | null) => {
  const minLength = 8
  const errors: string[] = []

  if (password === null) {
    return 'Пароль не должен быть пустым.'
  }

  if (
    password.length < minLength ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/\d/.test(password)
  ) {
    if (password.length < minLength) {
      errors.push('Пароль должен содержать минимум 8 символов.')
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну заглавную букву.')
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну строчную букву.')
    }
    if (!/\d/.test(password)) {
      errors.push('Пароль должен содержать хотя бы одну цифру.')
    }
  }
  return errors.length > 0 ? errors.join(' ') : ''
}

export const isPasswordValid = (password: string) => {
  return (
    password !== null &&
    password !== undefined &&
    password.trim() !== '' &&
    password.length > 1
  )
}

export const doPasswordsMatch = (
  newPassword: string,
  repeatPassword: string,
) => {
  return (
    newPassword !== undefined &&
    repeatPassword !== undefined &&
    newPassword === repeatPassword
  )
}

// export const canChangePassword = (
//   changePasswordData: UserPasswordApiPayload | null,
//   reErrorMessage: string,
//   errorMessage: string,
// ): boolean => {
//   if (!changePasswordData) return false
//   const {
//     password = '',
//     newPassword = '',
//     repeatPassword = '',
//   } = changePasswordData || {}
//   return (
//     isPasswordValid(password || '') &&
//     isPasswordValid(newPassword || '') &&
//     isPasswordValid(repeatPassword || '') &&
//     reErrorMessage === '' &&
//     errorMessage === ''
//   )
// }
