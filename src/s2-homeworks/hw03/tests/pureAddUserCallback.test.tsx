import { pureAddUserCallback } from '../HW3'
import { v1 } from 'uuid'

type UserType = {
    _id: string
    name: string
}

let users: UserType[] = []

const setUsers = (action: React.SetStateAction<UserType[]>) => {
    if (typeof action === 'function') {
        // если передана функция обновления состояния
        users = action(users)
    } else {
        users = action
    }
}

beforeEach(() => {
    users = []
})

test('name 1', () => {
    pureAddUserCallback('name', setUsers, users)
    expect(users.length).toBe(1)
    expect(users[0].name).toBe('name')
    expect(!!users[0]._id).toBe(true)
})
