// Copyright (C) 2023 Tricorder Observability
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Code generated by swaggo/swag. DO NOT EDIT
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/api/addCode": {
            "post": {
                "description": "Create Module",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "accounts"
                ],
                "summary": "Add module",
                "parameters": [
                    {
                        "description": "Add module",
                        "name": "module",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/module.Module"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/module.Module"
                        }
                    }
                }
            }
        },
        "/api/deleteCode": {
            "get": {
                "description": "Create Module",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "accounts"
                ],
                "summary": "Delete module by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "delete module id",
                        "name": "id",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/module.Module"
                        }
                    }
                }
            }
        },
        "/api/deployCode": {
            "post": {
                "description": "Create Module",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "module"
                ],
                "summary": "Deploy module",
                "parameters": [
                    {
                        "type": "string",
                        "description": "deploy module id",
                        "name": "id",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/module.Module"
                        }
                    }
                }
            }
        },
        "/api/listCode": {
            "get": {
                "description": "Create Module",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "accounts"
                ],
                "summary": "List all moudle",
                "parameters": [
                    {
                        "type": "string",
                        "description": "query field search like 'id,name,createTime'",
                        "name": "fields",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/module.Module"
                            }
                        }
                    }
                }
            }
        },
        "/api/undeployCode": {
            "post": {
                "description": "Create Module",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "accounts"
                ],
                "summary": "Undeploy module",
                "parameters": [
                    {
                        "type": "string",
                        "description": "undeploy module id",
                        "name": "id",
                        "in": "query",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/module.Module"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "common.DataField": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "type": {
                    "$ref": "#/definitions/common.DataField_Type"
                }
            }
        },
        "common.DataField_Type": {
            "type": "integer",
            "enum": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ],
            "x-enum-varnames": [
                "DataField_BOOL",
                "DataField_DATE",
                "DataField_INT",
                "DataField_INTEGER",
                "DataField_JSON",
                "DataField_JSONB",
                "DataField_TEXT"
            ]
        },
        "common.Format": {
            "type": "integer",
            "enum": [
                0,
                1
            ],
            "x-enum-varnames": [
                "Format_TEXT",
                "Format_BINARY"
            ]
        },
        "common.Lang": {
            "type": "integer",
            "enum": [
                0,
                1
            ],
            "x-enum-varnames": [
                "Lang_C",
                "Lang_WAT"
            ]
        },
        "common.Schema": {
            "type": "object",
            "properties": {
                "fields": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/common.DataField"
                    }
                },
                "name": {
                    "type": "string"
                }
            }
        },
        "ebpf.ProbeSpec": {
            "type": "object",
            "properties": {
                "entry": {
                    "type": "string"
                },
                "return": {
                    "type": "string"
                },
                "sample_period_nanos": {
                    "type": "integer"
                },
                "target": {
                    "type": "string"
                },
                "type": {
                    "$ref": "#/definitions/ebpf.ProbeSpec_Type"
                }
            }
        },
        "ebpf.ProbeSpec_Type": {
            "type": "integer",
            "enum": [
                0,
                1
            ],
            "x-enum-varnames": [
                "ProbeSpec_KPROBE",
                "ProbeSpec_SAMPLE_PROBE"
            ]
        },
        "ebpf.Program": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "string"
                },
                "fmt": {
                    "$ref": "#/definitions/common.Format"
                },
                "lang": {
                    "$ref": "#/definitions/common.Lang"
                },
                "perf_buffer_name": {
                    "type": "string"
                },
                "probes": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/ebpf.ProbeSpec"
                    }
                }
            }
        },
        "module.Module": {
            "type": "object",
            "properties": {
                "ebpf": {
                    "$ref": "#/definitions/ebpf.Program"
                },
                "name": {
                    "type": "string"
                },
                "wasm": {
                    "$ref": "#/definitions/wasm.Program"
                },
                "wasm_output_encoding": {
                    "$ref": "#/definitions/module.Module_EncodingParadigm"
                }
            }
        },
        "module.Module_EncodingParadigm": {
            "type": "integer",
            "enum": [
                0,
                1,
                2
            ],
            "x-enum-varnames": [
                "Module_NONE",
                "Module_TLV",
                "Module_JSON"
            ]
        },
        "wasm.Program": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "fmt": {
                    "$ref": "#/definitions/common.Format"
                },
                "fn_name": {
                    "type": "string"
                },
                "lang": {
                    "$ref": "#/definitions/common.Lang"
                },
                "output_schema": {
                    "$ref": "#/definitions/common.Schema"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "",
	Host:             "",
	BasePath:         "",
	Schemes:          []string{},
	Title:            "",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}