import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts"; // importmap doesnt work with testing package
import camelize from "./camelize.ts";

Deno.test("camelize works", async () => {
  assertStrictEq(camelize("this is an example"), "thisIsAnExample 🐪🐪🐪");
});
