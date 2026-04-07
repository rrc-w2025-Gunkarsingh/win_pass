import QRCode from "qrcode";
import { Pass } from "../types/pass";

let passes: Pass[] = [];

export const createPass = async (data: any): Promise<Pass> => {
  const id = Date.now().toString();

  // expiry = 30 days from now
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 30);

  const qrCode = await QRCode.toDataURL(id);

  const pass: Pass = {
    id,
    name: data.name,
    age: data.age,
    balance: data.balance || 0,
    ridesLeft: data.ridesLeft || 0,
    expiryDate: expiry.toISOString(),
    qrCode,
    createdAt: new Date(),
  };

  passes.push(pass);
  return pass;
};

export const getAllPasses = (): Pass[] => passes;

export const getPassById = (id: string): Pass | undefined => {
  return passes.find(p => p.id === id);
};