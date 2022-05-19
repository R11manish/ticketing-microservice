export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({}),
  },
  paymentIntents: {
    create: jest.fn().mockResolvedValue({}),
  },
};
