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
export const useRide = (id: string) => {
  const pass = passes.find(p => p.id === id);

  if (!pass) return { error: "Pass not found" };

  // check expiry
  if (new Date(pass.expiryDate) < new Date()) {
    return { error: "Pass expired" };
  }

  // check rides
  if (pass.ridesLeft <= 0 && pass.balance <= 0) {
    return { error: "No rides or balance left" };
  }

  // deduct ride first
  if (pass.ridesLeft > 0) {
    pass.ridesLeft -= 1;
  } else {
    pass.balance -= 3; // fare example
  }

  return pass;
};

export const topUpBalance = (id: string, amount: number) => {
  const pass = passes.find(p => p.id === id);

  if (!pass) return null;

  pass.balance += amount;
  return pass;
};