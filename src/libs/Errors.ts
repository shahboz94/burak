//CUSTOMIZED ERROR larni hosil qilib olamiz, Frontendchilarga qulaylik keltiradi
export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATE_FAILED = "Creation is failed!",
  UPDATE_FAILED = "Update is failed!",

  USED_NICK_PHONE = "You are inserting already used nick or phone!",
  TOKEN_CREATION_FAILED = "Token creation error",
  NO_MEMBER_NICK = "No member with this member nick!",
  BLOCKED_USER = "You are blocked, please contact with restaurant!",
  NO_MEMBER_PHONE = "You are inserting already used nick or phone!",
  WRONG_PASSWORD = "Wrong password, please try again",
  NOT_AUTHENTICATED = "You are not authentecated, Please login first!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}
export default Errors;
