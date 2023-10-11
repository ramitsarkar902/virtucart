import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import Product from "../models/Products.js";
import Service from "../models/Services.js"

export const add