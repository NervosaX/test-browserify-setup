import Three, {helperFunction} from "./test-file";

/* Equivalent imports:
 import {default as Three} from "./test-file";
 import {helperFunction} from "./testFile";
 import * as helpers from "./testFile";
 helpers.helperFunction;
 helpers.default;
 */

export default function() {
  Three();
  helperFunction();
}
