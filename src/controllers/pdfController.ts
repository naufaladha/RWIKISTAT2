import { Request, Response } from "express";
import { gfs } from "../db";

export const uploadPdf = (req: Request, res: Response) => {
  res.status(201).json({ message: "PDF file uploaded successfully", file: req.file });
};

export const getPdf = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const file = await gfs.findOne({ _id: id });
    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    if (file.contentType !== "application/pdf") {
      return res.status(400).json({ error: "Not a PDF file" });
    }

    res.set("Content-Type", file.contentType);
    res.set("Content-Disposition", `attachment; filename=${file.filename}`);

    const readStream = gfs.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    console.error("Error getting PDF:", error);
    res.status(500).json({ error: "Error getting PDF" });
  }
};
