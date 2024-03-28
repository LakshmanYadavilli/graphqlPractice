// import { GraphQLError } from "graphql";
import { StudentService } from "./src/services/student.service";
const studentService = new StudentService();
export const resolvers = {
  Query: {
    students: async () => {
      const res = studentService.getAll();
    },
  },
};
