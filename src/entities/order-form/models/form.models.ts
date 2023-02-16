export interface ValidationErrors {
  secondName?: string;
  firstName?: string;
  phone?: string;
  address?: string;
}

export interface ValidationTouched {
  secondName?: boolean;
  firstName?: boolean;
  phone?: boolean;
  address?: boolean;
}
