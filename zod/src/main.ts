import {z} from 'zod';
import {fromZodError} from "zod-validation-error";


const UserSchema = z.object({
    // you can add own error messages to all validations
    name: z.string().min(3, {message: "Name must be at least 3 characters"})
})

const user = {name: 99};

const results = UserSchema.safeParse(user);

if (!results.success) {
    console.log(fromZodError(results.error));
}
