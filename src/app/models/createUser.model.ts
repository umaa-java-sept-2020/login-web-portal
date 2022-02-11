import { UserStatus } from "./userStatus.model";

export class CreateUser{
  'uuid': string = "abcdwd";
  'username':string;
  'password':string;
  'roles':string[] = ["ADMIN"];
   'status': UserStatus= UserStatus.DRAFT;
  //  'resetPasswordToken':string;
}
