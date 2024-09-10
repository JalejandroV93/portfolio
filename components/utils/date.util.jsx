const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    return { years, months };
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const year = date.getFullYear();
    return `${capitalizedMonth} ${year}`;
};

export const formatDuration = (years, months) => {
    const parts = [];
    if (years > 0) parts.push(`${years} año${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mes${months !== 1 ? 'es' : ''}`);
    return parts.join(' ');
};

export const formatDateRange = (startDate, endDate) => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = endDate ? formatDate(endDate) : 'Presente';
    const { years, months } = calculateDuration(startDate, endDate);
    const durationString = formatDuration(years, months);
    return `${formattedStartDate} - ${formattedEndDate}${durationString ? ` · ${durationString}` : ''}`;
};