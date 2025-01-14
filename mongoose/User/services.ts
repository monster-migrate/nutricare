import UserModel from "./model";
import { UsersInterface } from "./interface";

export async function storeDocument(doc: UsersInterface): Promise<boolean> {
  try {
    await UserModel.create(doc);
  } catch (error) {
    console.error("Error storing document:", error);
    return false;
  }
  return true;
}

export async function listAll(): Promise<Array<UsersInterface>> {
  try {
    console.log("Database:", UserModel.collection.name);
    const results = await UserModel.find({});
    return results;
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function findByEmailOrPhone({
  email,
  phone,
}: {
  email?: string;
  phone?: string;
}): Promise<UsersInterface | null> {
  try {
    const result = await UserModel.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    return result;
  } catch (err) {
    console.log(err);
  }
  return null;
}
export async function updateByEmailOrPhone(
  { email, phone }: { email?: string; phone?: string },
  newData: Partial<UsersInterface>
): Promise<UsersInterface | null> {
  try {
    const updateCriteria = email ? { email } : { phone };
    const user = await UserModel.findOne(updateCriteria);

    if (!user) {
      console.error("User not found.");
      return null;
    }

    Object.assign(user, newData);
    await user.save();

    return { ...user.toObject(), ...newData };
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteByEmailOrPhone({
  email,
  phone,
}: {
  email?: string;
  phone?: string;
}): Promise<boolean> {
  try {
    const deleteCriteria = email ? { email } : { phone };
    await UserModel.deleteOne(deleteCriteria);
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}
