import { Notify } from "@/types/projects"

export const MESSAGES: Notify[] = [
  {
    id: 1,
    type: 'alert',
    message: 'Ошибка отправки запроса'
  },
  {
    id: 2,
    type: 'success',
    message: 'Запрос на участие в проекте успешно отправлен'
  },
  {
    id: 3,
    type: 'success',
    message: 'Данные профиля успешно изменены'
  },
]
