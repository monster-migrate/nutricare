export declare enum UserRole {
  Admin = "Admin",
  Pantry = "Pantry",
  Delivery = "Delivery",
}

export declare interface UsersInterface {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
  createdAt: Date;
  address: String;
  updatedAt: Date;
  resume: String;
  notes: String;
}
