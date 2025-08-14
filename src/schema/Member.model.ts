import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
// schema first,code first[forst]
const memberSchema = new Schema( //class orqari qurilib [new Schema] orqali bilishimiz mumkin class lardan Object yasalyapti
  {
    memberType: {
      type: String,
      enum: MemberType, // enum: aniq kitriladigan type
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPassword: {
      type: String,
      select: false,
      required: true,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },

    memberImage: {
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema); // mongusda modul degan mezet orqali schema modelini hosil qiladi va sharli ravishda 'member' atab yuqoridagi memberschemani argument sifatida olamiz. // shu orqali modelga aylandi
