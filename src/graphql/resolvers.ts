// import { findByLoc } from "../../mongoose/weather/services";
import {
  storeDocument,
  findByEmailOrPhone,
  listAll,
  updateByEmailOrPhone,
  deleteByEmailOrPhone,
} from "../../mongoose/User/services";
import { UserRole } from "../../mongoose/User/interface";

export const resolvers = {
  Query: {
    getUser: async (_: any, { email }: { email: string }) => {
      const user = await findByEmailOrPhone({ email });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    getUsers: async () => {
      const users = await listAll();
      return users;
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      {
        name,
        email,
        phone,
        password,
        role,
        resume,
        address,
        notes,
      }: {
        name: string;
        email: string;
        phone: string;
        password: string;
        role: UserRole;
        resume: string;
        address: string;
        notes: string;
      }
    ) => {
      const document = {
        name,
        email,
        phone,
        password,
        role,
        resume,
        address,
        notes,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const success = await storeDocument(document);
      if (!success) {
        throw new Error("Failed to create user");
      }
      return document;
    },

    updateUser: async (
      _: any,
      {
        email,
        name,
        phone,
        password,
        address,
        role,
      }: {
        email: string;
        name?: string;
        phone?: string;
        password?: string;
        address?: string;
        role?: UserRole;
      }
    ) => {
      const updatedData = {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(password && { password }),
        ...(role && { role }),
        ...(address && { address }),
        updatedAt: new Date(),
      };

      const updatedUser = await updateByEmailOrPhone({ email }, updatedData);
      if (!updatedUser) {
        throw new Error("Failed to update user");
      }

      return updatedUser;
    },

    deleteUser: async (_: any, { email }: { email: string }) => {
      const user = await findByEmailOrPhone({ email });
      if (!user) {
        throw new Error("User not found");
      }

      const success = await deleteByEmailOrPhone({ email });
      if (!success) {
        throw new Error("Failed to delete user");
      }

      return user;
    },
  },
};
