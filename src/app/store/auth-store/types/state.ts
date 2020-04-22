import { User } from 'src/app/shared/models/user';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}
