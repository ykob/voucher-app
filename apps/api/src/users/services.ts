import bcryptjs from 'bcryptjs';
import { prisma } from '~/prisma.js';

export const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const createUserByEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const hashedPassword = await bcryptjs.hashSync(
    password,
    bcryptjs.genSaltSync(10),
  );
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
};

export const updateUser = async (id: string, email: string) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      email,
    },
  });

  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });

  return user;
};
