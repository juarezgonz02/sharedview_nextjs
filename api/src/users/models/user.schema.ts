import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as bcrypt from "bcrypt";

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
})
export class User{
    @Prop({required: true})
    username: string;
    @Prop({required: true})
    email: string;
    @Prop()
    password: string;
    @Prop()
    salt: string;
}

const UserSchema = SchemaFactory.createForClass(User)

UserSchema.virtual("genSalt")
    .get(async function(this: UserDocument){
        return await bcrypt.genSalt()
    });

UserSchema.virtual("hash")
    .set(function(password){
        const hash = bcrypt.hashSync(password, this.salt)
        this.set({
            password: hash
        })
});

UserSchema.virtual("compare")
    .get(async function(this: UserDocument, password){
        return await bcrypt.compare(password, this.password)
});

export { UserSchema };