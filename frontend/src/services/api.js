import axios from "axios";

const API_URL = "http://localhost:8080/api";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Student Service
export const StudentService = {
    getAll: () => api.get("/students"),
    get: (id) => api.get(`/students/${id}`),
    create: (data) => api.post("/students", data),
    update: (id, data) => api.put(`/students/${id}`, data),
    delete: (id) => api.delete(`/students/${id}`),
};

// Teacher/Lecturer Service
export const TeacherService = {
    getAll: () => api.get("/teachers"),
    get: (id) => api.get(`/teachers/${id}`),
    create: (data) => api.post("/teachers", data),
    update: (id, data) => api.put(`/teachers/${id}`, data),
    delete: (id) => api.delete(`/teachers/${id}`),
};

// Course Service
export const CourseService = {
    getAll: () => api.get("/courses"),
    get: (id) => api.get(`/courses/${id}`),
    create: (data) => api.post("/courses", data),
    update: (id, data) => api.put(`/courses/${id}`, data),
    delete: (id) => api.delete(`/courses/${id}`),
};

// Auth Service
export const AuthService = {
    login: (credentials) => api.post("/auth/login", credentials),
    register: (user) => api.post("/auth/register", user),
};

export default api;
