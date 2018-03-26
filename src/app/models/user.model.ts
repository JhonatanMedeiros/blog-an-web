export class UserModal {
  _id: string;
  email?: string;
  password?: string;
  profile?: {
    email: string;
    firstName: string;
    lastName: string;
  };
}
