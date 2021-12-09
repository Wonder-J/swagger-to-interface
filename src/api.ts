export type OnePropProps = {
  description: string;
  type: "integer" | "string" | "number" | "array" | "boolean";
  items?: {
    $ref?: string;
    originalRef?: string;
    type?: "number" | "integer" | "string";
    enum?: string[];
  };
  enum?: string[];
  originalRef?: string;
};

export type PropertiesProps = {
  [params: string]: OnePropProps;
} & {
  title: string;
  type: "object";
};

export type OneScheProp = {
  title: string;
  type: "object";
  properties: PropertiesProps;
  required?: string[];
};

export type SchemeProps = Record<string, OneScheProp>;

export type ParamsProps = {
  description: string;
  in: "query" | "body";
  name: string;
  required: boolean;
  type?: "integer" | "string" | "number" | "array" | "boolean" | "file";
  items?: {
    $ref?: string;
    originalRef?: string;
    type?: "number" | "integer" | "string";
    enum?: string[];
  };
  originalRef?: string;
  enum?: string[];
  schema?: {
    $ref?: string;
    originalRef?: string;
    type?: "integer" | "string" | "number" | "array" | "boolean";
    enum?: string[];
    items?: {
      $ref?: string;
      originalRef?: string;
      type?: "number" | "integer" | "string";
      enum?: string[];
    };
  };
  allowEmptyValue?: boolean;
};

export type ResponceProps = {
  [params: string]: {
    description: string;
    schema?: {
      $ref?: string;
      originalRef?: string;
    };
  };
};

export type OnePathProps = {
  [methods: string]: {
    operationId: string;
    parameters: ParamsProps[];
    responses: ResponceProps;
  };
};

export type PathProps = {
  [url: string]: OnePathProps;
};
