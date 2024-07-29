export interface Property {
  id?: number;
  property_type?: string;
  price?: number;
  size?: number;
  [key: string]: any; // Para permitir otros campos opcionales
}
