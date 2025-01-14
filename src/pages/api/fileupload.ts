import formidable, { IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { GetSignedUrlConfig, Storage } from "@google-cloud/storage";
import { Buffer } from "buffer";

const GOOGLE_CLOUD_KEY_BASE64 =
  process.env.GOOGLE_CLOUD_SERVICE_KEY_BASE64 || "";
const credentials = JSON.parse(
  Buffer.from(GOOGLE_CLOUD_KEY_BASE64, "base64").toString("utf-8")
);

const storage = new Storage({ credentials });
const bucketName = "nutricare-storage";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle file uploads manually
  },
};

type Data = {
  url?: string;
  error?: string;
};

const handlePostRequest = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: "Error processing file" });
      return;
    }

    // Check if the file exists in files
    const file = files.file ? (files.file as formidable.File[])[0] : null;

    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const fileName = file.originalFilename as string;

    try {
      const signedUrl = await generateSignedUrl(fileName);
      res.status(200).json({ url: signedUrl });
    } catch (error) {
      res.status(500).json({ error: "Error generating signed URL" });
    }
  });
};

async function generateSignedUrl(fileName: string): Promise<string> {
  const options: GetSignedUrlConfig = {
    version: "v4",
    action: "write",
    expires: Date.now() + 15 * 60 * 1000,
  };
  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options)
    .then((response) => response)
    .catch((err) => {
      throw new Error(`Failed to generate signed URL: ${err.message}`);
    });
  return url;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    handlePostRequest(req, res);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
