export const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date + date + random;
}

export const formatDate = fecha =>{
    const newDate = new Date(fecha);

    // This object have a date format configuration 
    const dateConfig = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return newDate.toLocaleDateString("es-ES" , dateConfig);
}