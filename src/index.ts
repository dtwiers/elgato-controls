#! node

import m from "minimist";
import z from "zod";

const Args = z.object({
  _: z.array(z.string()),
  brightness: z.number().optional(),
  temperature: z.number().gt(1).lt(344).optional()
})

console.log(m(process.argv.slice(2)))
