export const buildPerson = (name: string, surname: string) => {
    if (!name || !surname) {
        throw new Error('Name and surname are required.')
    }

    return ({
        name,
        surname,
    })

};

export const getMyTemperature = (): number => Math.random() * (45 - 33) + 33;