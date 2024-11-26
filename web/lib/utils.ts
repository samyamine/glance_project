import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {clothImagePaths} from "@/lib/variables";

// DO NOT TOUCH THIS FUNCTION (shadcn) !
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
