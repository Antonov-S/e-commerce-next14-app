declare module "clsx" {
  export type ClassValue =
    | string
    | number
    | null
    | undefined
    | { [key: string]: any }
    | ClassValue[];
  export default function clsx(...args: ClassValue[]): string;
}
