import axios from 'axios';

// const url = 'http://localhost:5000/posts';

const url = 'http://localhost:8080';

const url1 = 'http://localhost:8080/getAllEvents';

export const retrieveEvents = () => axios.get(url1);

const url2 = 'http://localhost:8080/insertEvent';

export const createEvent = (newEvent) => axios.post(url2, newEvent);

export const updateEvent = (id, updated_Event) => axios.patch(`${url}/${id}`, updated_Event); // updated_Event = event data

export const deleteEvent = (id) => axios.delete(`${url}/${id}`);

export const joinEvent = (id) => axios.patch(`${url}/${id}/joinEvent`); // what does this path mean?

export const rejectEvent = (id) => axios.patch(`${url}/${id}/rejectEvent`); 