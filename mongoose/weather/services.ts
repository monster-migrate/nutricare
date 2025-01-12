import WeatherModel from "./model";
import { WeatherDetailInterface } from "./interface";
export async function storeDocument(
  doc: WeatherDetailInterface
): Promise<boolean> {
  try {
    await WeatherModel.create(doc);
  } catch (error) {
    console.error("Error storing document:", error);
    return false;
  }
  return true;
}
export async function listAll(): Promise<Array<WeatherDetailInterface>> {
  try {
    const results = await WeatherModel.find({});
    return results;
  } catch (err) {
    console.log(err);
  }
  return [];
}
export async function findByLoc({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<Array<WeatherDetailInterface> | null> {
  try {
    const result = await WeatherModel.findOne({
      latitude: latitude,
      longitude: longitude,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
}

export async function updateByLoc(
  { latitude, longitude }: { latitude: number; longitude: number },
  newData: WeatherDetailInterface
): Promise<boolean> {
  try {
    await WeatherModel.updateOne(
      { latitude: latitude, longitude: longitude },
      newData
    );
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}

export async function deleteByLoc({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<boolean> {
  try {
    await WeatherModel.deleteOne({ latitude: latitude, longitude: longitude });
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}
