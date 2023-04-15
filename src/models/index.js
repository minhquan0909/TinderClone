// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GenderEnum = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { Match, User } = initSchema(schema);

export {
  Match,
  User,
  GenderEnum
};