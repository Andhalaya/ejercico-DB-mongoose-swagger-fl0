module.exports = {
    paths: {
        "/create": {
            post: {
                summary: "Crea una nueva tarea",
                operationId: "createTask",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task"
                            }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: "Tarea creada exitosamente"
                    },
                    '500': {
                        description: "Error del servidor"
                    }
                }
            }
        },
        "/": {
            get: {
                summary: "Obtiene todas las tareas",
                operationId: "getTasks",
                responses: {
                    '200': {
                        description: "Lista de tareas obtenida exitosamente",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Task"
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: "Error del servidor"
                    }
                }
            }
        },
        "/id/{_id}": {
            get: {
                summary: "Obtiene una tarea por su ID",
                operationId: "getTaskById",
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        description: "ID de la tarea a obtener",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "Tarea obtenida exitosamente",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    '500': {
                        description: "Error del servidor"
                    }
                }
            },
            delete: {
                summary: "Elimina una tarea por su ID",
                operationId: "deleteTask",
                parameters: [
                    {
                        in: "path",
                        name: "_id",
                        required: true,
                        description: "ID de la tarea a eliminar",
                        schema: {
                            type: "string"
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: "Tarea eliminada exitosamente",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task"
                                }
                            }
                        }
                    },
                    '500': {
                        description: "Error del servidor"
                    }
                }
            }
        }
    }
};
