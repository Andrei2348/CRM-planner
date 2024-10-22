export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,15}$/
  return usernameRegex.test(username)
}
