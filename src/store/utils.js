import { format } from 'date-fns'

export const formatDate = (date) => {
    if (date) {
        const newDate = format(date, 'DD/MM/YYYY')
        return newDate;
    }
}

export const emptyToNull = (date) => {
    if (!date) {
        return null;
    }
    return date;
}

export const formatDateTime = (date) => {
    if (date) {
        const newDate = format(date, 'DD/MM/YYYY')
        return newDate;
    }
}

export const formatDateTimeFull = (date) => {
    if (date) {
        const newDate = format(date, 'DD/MM/YYYY HH:mm')
        return newDate;
    }
}

export const updateObject = (old, values) => {
    return {
        ...old,
        ...values
    }
}